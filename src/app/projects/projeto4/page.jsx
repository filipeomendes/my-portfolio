import AutomationPage from "@/components/AutomationPage";

export default function Projeto4() {
  return (
    <AutomationPage
      number={4}
      image="/projeto4.jpg"
      repositoryUrl="https://github.com/filipeomendes/Document_Generator_Automation"
      content={{
        en: {
          title: "Document Generator",
          description: [
            "This project is a document automation tool designed to generate personalized PDF documents using data from an Excel spreadsheet and a Word template. It was created to reduce manual work in administrative or HR processes where standardized documents need to be issued for multiple employees.",
            "The application allows the user to select an Excel database, choose a Word template, and enter the employee IDs to be processed. Based on this input, the system searches for the corresponding records in the spreadsheet, automatically replaces placeholders in the Word document, and generates a final PDF file for each employee.",
            "The project uses Python with Pandas to read the dataset, python-docx to edit Word documents, docx2pdf to convert files into PDF, and Tkinter to provide a simple graphical interface. It also handles empty fields, removes unnecessary spaces and commas, and displays an execution log so the user can track the process.",
            "Without automation, the user would need to manually open each template, copy data from the spreadsheet, fill the document, save it, and convert it to PDF. With this solution, the workflow becomes faster, standardized, and much less prone to human error."
          ]
        },
        pt_br: {
          title: "Gerador de Documentos",
          description: [
            "Este projeto é uma automação desenvolvida para gerar documentos personalizados em PDF a partir de uma base Excel e de um modelo Word. A solução foi criada para reduzir o trabalho manual de preencher documentos individualmente, especialmente em processos administrativos ou de RH que exigem a emissão de documentos padronizados para diferentes colaboradores.",
            "A aplicação permite que o usuário selecione uma planilha de cadastro, escolha um modelo Word e informe os IDs dos colaboradores que devem ser processados. Com base nesses dados, o sistema busca as informações correspondentes no Excel, substitui automaticamente os campos marcados no documento Word e gera uma versão final em PDF para cada colaborador.",
            "O projeto utiliza Python com Pandas para leitura da base de dados, python-docx para manipulação do documento Word, docx2pdf para conversão em PDF e Tkinter para oferecer uma interface simples e amigável. A automação também trata campos vazios, remove espaços e vírgulas desnecessárias e exibe um log de execução para acompanhar o processamento.",
            "Sem essa automação, o usuário precisaria abrir cada modelo manualmente, copiar dados da planilha, preencher os campos, salvar o arquivo e converter para PDF. Com a automação, esse processo se torna rápido, padronizado e muito menos sujeito a erros.",
          ]
        },
      }}
    />
  );
}
