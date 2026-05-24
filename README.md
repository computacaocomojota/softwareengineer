# 📦 CRUD de Clientes (TDD)

Este repositório contém a implementação de um fragmento de software (CRUD de Clientes) desenvolvido inteiramente utilizando a metodologia Test-Driven Development (TDD) para a disciplina de Engenharia de Software.

## 🛠 Tecnologias Utilizadas
* **Linguagem:** TypeScript / Node.js

* **Testes:** Jest

* **Documentação:** TypeDoc

* **Gerenciador de Pacotes:** pnpm

## 🚀 Como executar o projeto

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/seu-usuario/softwareengineer.git
   cd softwareengineer
   ```

2. **Instale as dependências:**
   ```bash
   pnpm install
   ```

3. **Execute a suíte de testes (TDD em ação):**
   ```bash
   pnpm test
   ```

## 📖 Como visualizar a Documentação
A documentação do código fonte é gerada automaticamente baseada nos comentários JSDoc.

Para gerar os arquivos HTML da documentação, execute:
```bash
pnpm run build:docs
```

Acesse a pasta `docs/` recém-criada e abra o arquivo `index.html` em qualquer navegador web para visualizar a documentação completa da API.

---

## Metodologia TDD Aplicada

O Test-Driven Development (Desenvolvimento Orientado a Testes) é uma prática de engenharia de software onde os testes são escritos antes do código de produção. A metodologia se baseia em um ciclo curto e iterativo conhecido como Red-Green-Refactor:

* **Red (Vermelho):** Escreve-se um teste para uma nova funcionalidade. O teste deve falhar, pois a funcionalidade ainda não existe.

* **Green (Verde):** Escreve-se o código de produção mais simples possível apenas para fazer o teste passar.

* **Refactor (Refatorar):** O código é melhorado (limpeza, otimização, aplicação de padrões) com a segurança de que os testes garantem que o comportamento original não foi quebrado.

Do ponto de vista estratégico, o TDD atua como uma documentação viva do sistema e previne a regressão de bugs, aumentando a confiabilidade do produto final.

Para esta implementação, escolhemos o ecossistema Node.js com TypeScript:

* **TypeScript:** Adiciona tipagem estática ao JavaScript, prevenindo erros em tempo de compilação.

* **Jest:** Um framework de testes em JavaScript completo e focado na simplicidade. Ele atua como nosso test runner e biblioteca de asserções (onde validamos se o resultado esperado é igual ao obtido).

* **TypeDoc:** Ferramenta para gerar documentação estática a partir de comentários JSDoc em arquivos TypeScript.

* **pnpm:** Gerenciador de pacotes rápido e eficiente para instalar as dependências.

### Como o TDD foi aplicado no desenvolvimento do CRUD de Clientes:

O desenvolvimento seguiu rigorosamente o ciclo do TDD. Começamos pela funcionalidade de Criação de Cliente:

* **Red:** Criamos o arquivo `customer.service.spec.ts` e escrevemos um teste garantindo que o método `create` devesse retornar um cliente com um ID gerado, dado um nome e email válidos. Ao rodar o Jest (`pnpm test`), o teste falhou por ausência do método.

* **Green:** Criamos a classe `CustomerService` em `customer.service.ts` e implementamos um repositório em memória (um simples array) e o método `create` apenas com a lógica necessária para o teste passar.

* **Refactor:** Melhoramos a estrutura da classe, extraindo a interface `Customer` para um tipo claro e adicionando a documentação JSDoc.

Esse processo foi repetido para as operações de Leitura (Read), Atualização (Update) e Exclusão (Delete), garantindo que cada regra de negócio estivesse coberta por testes antes de sua implementação final.
