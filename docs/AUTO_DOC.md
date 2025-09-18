# Templários 2.0 — Documentação Técnica (AUTO_DOC)

Este documento descreve o propósito, regras de negócio, tecnologias, padrões e processos operacionais deste repositório, com foco em manutenção e evolução pelo time de desenvolvimento.


## Visão Geral

- Nome: Templários 2.0 (distribuível)
- Função do repositório: distribuição de artefatos/pacotes compilados do monorepo principal (templarios-2.0-monorepo) para consumo em projetos internos, sem uso de um registro privado do npm.
- Fonte de verdade do código-fonte: https://github.com/MEDGRUPOGIT/templarios-2.0-monorepo
- Este repositório não contém o código-fonte dos pacotes. Ele serve para versionar e disponibilizar os artefatos finais (pacotes .tgz) que serão instalados como dependências.


## Escopo e Regras de Negócio

- Distribuição, não desenvolvimento: nenhum pacote é desenvolvido aqui. Toda evolução funcional, correções e builds são feitas no monorepo principal. Este repo recebe apenas artefatos prontos para uso.
- Disponibilização consistente: cada versão publicada neste repositório deve corresponder a uma versão semântica (SemVer) dos pacotes construídos no monorepo, com artefatos nomeados de forma previsível.
- Rastreabilidade: para cada release aqui, deve existir uma tag ou referência clara (ex.: commit/tag do monorepo) que gerou os artefatos.
- Imutabilidade de releases: artefatos anexados a uma release não devem ser alterados após publicação. Correções precisam de uma nova versão (ex.: v1.2.1 → v1.2.2).
- Compatibilidade: mudanças breaking exigem incremento de major conforme SemVer; novas features backward‑compatible incrementam minor; correções incrementam patch.


## Tecnologias e Ferramentas

- GitHub (código, tags, releases e assets).
- Git (fluxo de versionamento e empacotamento).
- Node.js + npm/yarn/pnpm (consumo de artefatos .tgz como dependências).
- SemVer para versionamento.

Observação: este repositório, por si só, não define versões de Node, npm ou bibliotecas — essas características derivam dos pacotes gerados no monorepo. Sempre consulte os `package.json` originais no monorepo para engines/peerDependencies suportadas.


## Bancos de Dados

- Não aplicável a este repositório. Como se trata de um repositório de distribuição de artefatos, não há conexão, schema ou migrações de banco de dados envolvidos aqui. Qualquer interação com dados pertence aos pacotes de aplicação no monorepo e/ou aos serviços que os consomem.


## Padrões Arquiteturais

- Repositório de distribuição (binary/artifact repo): armazena artefatos resultantes de build. Não há camadas de aplicação, nem serviços ou módulos de negócio; o design system e demais pacotes vivem no monorepo e são empacotados para cá.
- Release por versão: cada release Git (tag `vX.Y.Z`) referencia um conjunto de arquivos `.tgz` prontos para instalação.


## Estrutura do Repositório

No estado atual, o repositório é mínimo. Espera-se que as versões sejam disponibilizadas via GitHub Releases (com assets anexados) ou, alternativamente, via commits contendo os artefatos em uma árvore organizada. Recomenda-se o uso de Releases.

Sugestão de convenções quando houver artefatos em Releases:

- Nome dos assets: `<nome-do-pacote>-<versao>.tgz` (ex.: `@medgrupo/templarios-core-1.2.3.tgz` → como nome de arquivo, substituir `@` por `_` ou remover escopo se necessário por compatibilidade de FS).
- Um asset por pacote e por versão.
- Changelog (opcional) como asset adicional ou corpo da Release.


## Fluxo de Publicação (proposto)

1) Construção no monorepo
- Atualize versão(s) no monorepo (ex.: `changeset`/`npm version`).
- Rode a build: por exemplo `pnpm build` ou `npm run build` (seguir instruções do monorepo).
- Gere os pacotes `.tgz` com `npm pack` em cada pacote a ser publicado. Isso garante que o conteúdo final seja o mesmo que seria enviado ao npm registry.

2) Versionamento e Tag no repositório de distribuição
- Crie uma tag SemVer neste repositório seguindo `vX.Y.Z` (ex.: `v1.2.3`).
- Crie uma Release no GitHub associada à tag.

3) Anexar artefatos `.tgz`
- Anexe na Release todos os `.tgz` gerados correspondentes à versão.
- Opcional: inclua um `checksums.txt` com SHA256/512 dos arquivos para auditoria.

4) Publicar
- Publique a Release. Após isso, considere imutável.


## Como Consumir nos Projetos

Método recomendado (URL direta do asset da Release):

- npm
  - `npm install https://github.com/MEDGRUPOGIT/templarios-2.0/releases/download/v1.2.3/templarios-core-1.2.3.tgz`
  - Em `package.json`:
    ```json
    {
      "dependencies": {
        "@medgrupo/templarios-core": "https://github.com/MEDGRUPOGIT/templarios-2.0/releases/download/v1.2.3/templarios-core-1.2.3.tgz"
      }
    }
    ```
- yarn
  - `yarn add https://github.com/MEDGRUPOGIT/templarios-2.0/releases/download/v1.2.3/templarios-core-1.2.3.tgz`
- pnpm
  - `pnpm add https://github.com/MEDGRUPOGIT/templarios-2.0/releases/download/v1.2.3/templarios-core-1.2.3.tgz`

Observações importantes:
- Ajuste o nome do arquivo conforme o asset real publicado na Release.
- Respeite peerDependencies informadas pelo pacote (React/Node/TypeScript etc.).
- Para múltiplos pacotes (tokens, ícones, components, utils etc.), instale cada `.tgz` correspondente à mesma versão para manter compatibilidade.

Observação sobre dependências Git:
- npm/yarn/pnpm suportam dependências diretamente de repositórios Git por tag/commit. Contudo, quando o pacote não está na raiz ou depende de build, a instalação via Git pode não refletir o artefato final esperado. A instalação via `.tgz` gerado por `npm pack` assegura que o conteúdo seja idêntico ao publicado em um registry.


## Branches e Versionamento

- Branches existentes: `main` (desenvolvimento/estado atual) e `release/*` (ex.: `release/1.0.0`) para manutenção de linhas de release, se necessário.
- Tags: use `vX.Y.Z` para releases estáveis.
- SemVer
  - MAJOR: mudanças incompatíveis (breaking changes).
  - MINOR: novas features backward‑compatible.
  - PATCH: correções backward‑compatible.

Dicas:
- Gere release notes breves contendo pacotes afetados, breaking changes, migrações e links para PRs do monorepo.


## Segurança e Confiabilidade

- Integridade: publique checksums (SHA256) dos `.tgz` e, se possível, valide localmente após download.
- Fonte confiável: sempre anexe apenas artefatos gerados a partir de commits e pipelines auditáveis do monorepo.
- Revisão: toda nova Release deve passar por revisão (code review dos passos de empacotamento no monorepo) antes da publicação.

Exemplos de verificação de checksum:
- macOS: `shasum -a 256 nome-do-arquivo.tgz`
- Linux: `sha256sum nome-do-arquivo.tgz`


## Automatização (Recomendada)

- GitHub Actions neste repositório para:
  - Validar estrutura de assets ao criar/edit ar Releases (nome, versão, checksum).
  - Publicar automaticamente artefatos ao criar tag, consumindo artefatos do pipeline do monorepo.
- Pipeline no monorepo para:
  - Build e `npm pack` de todos os pacotes.
  - Upload como artifacts do workflow.
  - Disparar workflow neste repositório para anexar artifacts à Release correspondente.


## Troubleshooting

- Erro ao instalar `.tgz`:
  - Verifique URL e nome do asset; confira se a Release é pública/visível ao seu token de acesso.
  - Confirme versão do Node/npm compatível com `engines`/`peerDependencies` do pacote.
- Conflitos de versão:
  - Mantenha todos os pacotes do design system na mesma versão (ex.: `core`, `icons`, `tokens`, `react`, etc.).
- Conteúdo incorreto no pacote:
  - O problema está no processo de build/pack do monorepo. Gere novamente os `.tgz` com `npm pack` após build.


## Responsabilidades entre Repositórios

- Monorepo (templarios-2.0-monorepo)
  - Código-fonte, testes, build e empacotamento.
  - Versionamento de pacotes e controle de breaking changes.
- Este repositório (templarios-2.0)
  - Versionamento e publicação (tags/releases) dos artefatos `.tgz`.
  - Documentação de consumo e governança de releases.


## Roadmap Sugerido

- Adicionar GitHub Actions para: validação de assets, publicação automatizada via tags, checksum e assinatura opcional.
- Padronizar nomes de arquivos de pacotes e escopos (ex.: `@medgrupo/templarios-*`).
- Adicionar um `RELEASE_PROCESS.md` com o passo a passo operacional (comandos reais usados no monorepo e aqui).
- Criar um `CHANGELOG.md` por release consolidando mudanças relevantes por pacote.


## Referências

- Monorepo: https://github.com/MEDGRUPOGIT/templarios-2.0-monorepo
- npm pack: https://docs.npmjs.com/cli/v10/commands/npm-pack
- npm install via URL de tarball: https://docs.npmjs.com/cli/v10/commands/npm-install#installing-from-a-tarball-url

---
Última atualização: gerado automaticamente a partir do estado atual do repositório.
