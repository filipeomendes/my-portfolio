import AutomationPage from "@/components/AutomationPage";

export default function Projeto6() {
  return (
    <AutomationPage
      number={6}
      image="/projeto6.jpg"
      repositoryUrl="https://github.com/filipeomendes/Labor-Union-Registration-Automation"
      content={{
        en: {
          title: "Excel to ERP Integration",
          description: [
            "This project is a desktop data entry automation designed to populate records in a business system using data from an Excel spreadsheet.",
            "The solution was built to automate a repetitive workflow where the user had to manually create records, navigate between system tabs, and fill specific fields such as registration number, name, description, and union code.",
            "The automation uses Python with PyAutoGUI, PyDirectInput, and Pandas to read the dataset, control mouse and keyboard actions, navigate through the desktop interface, and complete the required steps for each record. Since the target system did not provide an API or direct integration, the automation was built by simulating human interaction with the screen, making it especially useful for legacy desktop systems.",
            "The automation uses Python with PyAutoGUI, PyDirectInput, and Pandas to read the dataset, control mouse and keyboard actions, navigate through the desktop interface, and complete the required steps for each record. Since the target system did not provide an API or direct integration, the automation was built by simulating human interaction with the screen, making it especially useful for legacy desktop systems.",
          ]
        },
        pt_br: {
          title: "Integração de Excel com ERP",
          description: [
            "Este projeto é uma automação de entrada de dados desenvolvida para preencher informações em um sistema desktop a partir de uma planilha Excel. A solução foi criada para automatizar um processo repetitivo em que o usuário precisava cadastrar manualmente registros, navegar entre abas do sistema e preencher campos específicos com dados como número de cadastro, nome, descrição e sindicato.",
            "A automação utiliza Python com PyAutoGUI, PyDirectInput e Pandas para ler a base de dados, controlar o mouse e o teclado, navegar pela interface do sistema e executar as etapas necessárias para cada registro. Como o sistema utilizado não possuía API ou integração direta, a solução foi construída simulando a interação humana com a tela, o que torna o projeto especialmente útil para ambientes com softwares legados.",
            "Sem essa automação, o processo dependeria de digitação manual, repetição de cliques e alto risco de erros. Com a solução, os dados são inseridos de forma padronizada, reduzindo o tempo operacional e aumentando a consistência do cadastro."
          ],
        },
      }}
    />
  );
}
