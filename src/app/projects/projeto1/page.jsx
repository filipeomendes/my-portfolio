import AutomationPage from "@/components/AutomationPage";

export default function Projeto1() {
  return (
    <AutomationPage
      number={1}
      image="/projeto1.jpg"
      repositoryUrl="https://github.com/filipeomendes/Attendance_Review_Automation"
      content={{
        en: {
          title: "Automated Attendance Report Integration System",
          description: [
            "This project is a full automation solution designed to collect, process, and validate employee attendance data from multiple external systems.",
            "The application integrates web automation, Excel processing, and a user-friendly graphical interface to transform a highly manual and repetitive workflow into a fully automated pipeline. Based on a user-defined date range, the system logs into two different platforms, navigates through report sections, and downloads the required files automatically.",
            "Once the data is collected, the script performs extensive data processing, including formatting dates and times, removing inconsistencies, and consolidating all records into a structured output file. It also cross-references the data with an internal database (internal_system.xlsx), assigning a status to each record (found or not found), enabling quick and reliable validation.",
            "The project also features a Tkinter-based interface, providing real-time feedback through a progress bar, status messages, and a final summary report, significantly improving usability.",
            "Without automation, this process would take several hours up to a week of work, involving manual downloads, file organization, and Excel validation. With this solution, the entire workflow can be completed in approximately 6 minutes, drastically reducing human error and increasing operational efficiency."
            
          ]
        },
        pt_br: {
          title: "Sistema de Integração de Relatórios de Ponto Automatizado",
          description: [
            "Este projeto consiste em uma automação completa para coleta, processamento e validação de dados de ponto de funcionários a partir de múltiplos sistemas externos.",
            "A aplicação combina automação web, manipulação de arquivos Excel e uma interface gráfica intuitiva para transformar um processo manual e repetitivo em um fluxo totalmente automatizado. A partir de um intervalo de datas definido pelo usuário, o sistema acessa dois portais distintos, realiza login automaticamente, navega pelos relatórios e executa o download dos arquivos necessários.",
            "Após a coleta dos dados, o código realiza uma etapa robusta de tratamento, padronizando formatos de data e hora, removendo inconsistências e consolidando informações em um único arquivo estruturado. Além disso, o sistema cruza os dados com uma base interna (internal_system.xlsx), gerando um status para cada registro (encontrado ou não encontrado), permitindo validação rápida e confiável.",
            "O projeto também inclui uma interface desenvolvida com Tkinter, oferecendo feedback visual em tempo real através de barra de progresso, mensagens de status e relatórios finais, o que melhora significativamente a experiência do usuário.",
            "Sem essa automação, o processo levava várias horas até uma semana de trabalho, envolvendo downloads manuais, organização de arquivos e validação em Excel. Com a solução implementada, todo o fluxo pode ser executado em cerca de 6 minutos, reduzindo drasticamente erros humanos e aumentando a eficiência operacional."
          ]
        },
      }}
    />
  );
}
