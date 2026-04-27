import AutomationPage from "@/components/AutomationPage";

export default function Projeto2() {
  return (
    <AutomationPage
      number={2}
      image="/projeto2.jpg"
      repositoryUrl="https://github.com/filipeomendes/Smart-Statement-Collector"
      content={{
        en: {
          title: "Financial Statement Extraction Automation",
          description: [
            "This project is an automation solution designed to extract financial data from a web-based system and generate PDF statements automatically for multiple employees.",
            "The application uses Selenium to navigate through the system, perform authentication, fill in required fields, and access individual reports based on an Excel dataset containing employee information such as ID, name, and PIS. Throughout the process, the system handles different scenarios, including invalid records or accounts that do not meet access criteria, ensuring robust and reliable execution.",
            "When valid data is found, the automation extracts key information directly from the webpage, such as financial values and dates, and updates the original Excel file accordingly. Additionally, the system triggers the browser’s print functionality to automatically generate and save PDF files, using structured naming conventions for better organization.",
            "A key feature of this project is its ability to handle multiple accounts per employee, iterating through available options and ensuring all relevant data is captured and processed.",
            "Without automation, this workflow would require manual interaction for each employee, individual report generation, and manual data entry, potentially taking hours or even days depending on the volume. With this solution, the entire process runs continuously and automatically, significantly reducing execution time and eliminating human errors.Without automation, this workflow would require manual interaction for each employee, individual report generation, and manual data entry, potentially taking hours or even days depending on the volume. With this solution, the entire process runs continuously and automatically, significantly reducing execution time, from hours to a few minutes and eliminating human errors.",
          ]
        },
        pt_br: {
          title: "Automação de Extração de Declarações Financeiras",
          description: [
            "Este projeto é uma automação desenvolvida para extrair informações financeiras de colaboradores diretamente de um sistema web e gerar comprovantes em PDF de forma totalmente automática.",
            "A aplicação utiliza Selenium para navegar no sistema, realizar autenticação, preencher dados e acessar relatórios individuais com base em uma base de dados Excel contendo informações como ID, nome e PIS dos colaboradores. Durante o processo, o sistema identifica diferentes cenários, como erros de cadastro ou contas que não atendem critérios de acesso, tratando cada caso de forma automatizada e registrando ocorrências.",
            "Quando os dados são encontrados com sucesso, o sistema captura informações relevantes diretamente da página, como valores e datas, e as organiza no arquivo Excel original. Além disso, a automação utiliza o próprio navegador para gerar e salvar automaticamente os extratos em formato PDF, nomeando os arquivos de forma estruturada para facilitar a organização.",
            "Um dos pontos mais relevantes do projeto é a capacidade de lidar com múltiplas contas por colaborador, iterando sobre diferentes opções disponíveis no sistema e garantindo que todas as informações sejam coletadas e registradas corretamente.",
            "Sem essa automação, o processo exigiria acesso manual ao sistema para cada colaborador, geração individual de extratos e preenchimento manual de planilhas, o que poderia levar horas ou dias dependendo do volume. Com a solução implementada, todo o fluxo é executado de forma contínua e automatizada, reduzindo drasticamente o tempo operacional, de horas para poucos minutos, e eliminando erros humanos.",
          ]
        },
      }}
    />
  );
}
