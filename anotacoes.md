- Eu tenho que responder os alunos e eu me perco em quais dúvidas já foram respondidas
#    insructor -   use-case  - students

- Entidades traduzem tudo que for mantido na aplicação - não precisa ser tablelas no banco - podem compor uma tabela

- implementada a interface de contrato da classe AnswersRepository, que é uma dependência externa da camada de persistência. Isso permitirá que a classe de caso de uso possa utilizá-la sem depender diretamente da implementação concreta da classe.

-Ha propriedades da entidade que podem ser consideradas entidades separadas que posuem funcionamento isoladas, no DDD a gente chama de value objec, ou seja, são valores são propriedades das nossas entidades que possuem regras de negócio associadas a essas propriedades e essas regras podem ser formatações validações, funcionamentos que eu quero restringir dentro daquela propriedade

- **Refatoração das Entidades com uma Classe Base (`Entity`)**

  As entidades de domínio (`Answer`, `Question`, `Student`, etc.) foram refatoradas para estender uma classe base genérica `Entity`.

  **Motivos para a mudança:**

  1.  **Centralização da Lógica de ID:** A criação e o gerenciamento de IDs únicos agora são feitos pela classe `Entity`, evitando duplicação de código.
  2.  **Encapsulamento:** As propriedades de cada entidade são agrupadas em um objeto `props` protegido, permitindo um controle de acesso mais rígido através de getters e métodos. Isso protege as regras de negócio da entidade.
  3.  **Manutenibilidade:** A lógica comum fica em um só lugar. Futuras alterações na gestão de IDs, por exemplo, só precisam ser feitas na classe `Entity`.