import AutomationPage from "@/components/AutomationPage";

export default function Projeto5() {
  return (
    <AutomationPage
      number={5}
      image="/projeto5.jpg"
      repositoryUrl="https://github.com/filipeomendes/Income-Report-Splitter-Automation"
      content={{
        en: {
          title: "PDF Splitting Automation",
          description: [
            "This project was developed to automate the process of splitting a single PDF containing multiple reports into individual files for each beneficiary. In scenarios such as payroll processing or benefits distribution, it is common to work with a consolidated PDF containing dozens or even hundreds of pages, making manual handling inefficient and prone to errors.",
            "The solution was built in Python and processes the PDF page by page, extracting text to identify the beneficiary’s name and CPF using regular expressions. Based on this information, the script groups pages belonging to the same individual and generates a separate PDF file for each beneficiary.",
            "In addition to splitting the files, each generated document is protected with a password using the beneficiary’s CPF in numeric format. This ensures secure distribution and restricts access to sensitive information. The output files are automatically organized in a folder, with sanitized file names to avoid invalid characters.",
            "Without automation, this process requires manually reviewing each page, identifying the beneficiary, splitting the document, creating new files, and assigning passwords individually. On average, this can take between one and two minutes per beneficiary, resulting in approximately two to three hours of work for one hundred people.",
            "Before the automaiom, a processos with 100 beneficiaries would take approximately 3 hours With automation, the entire process is completed in a matter of seconds or a few minutes, depending on the file size. This significantly reduces operational time while eliminating human errors and ensuring consistency in document delivery.",
          ]
        },
        pt_br: {
          title: "Automação de Separação de PDFs",
          description: [
            "Este projeto foi desenvolvido para automatizar a separação de arquivos PDF contendo múltiplos informes em documentos individuais por beneficiário. Em cenários como folha de pagamento ou distribuição de informes, é comum trabalhar com um único PDF consolidado com dezenas ou centenas de páginas, o que torna o processo manual repetitivo, demorado e sujeito a erros.",
            "A solução foi construída em Python e realiza a leitura do arquivo PDF página por página, utilizando extração de texto para identificar automaticamente o nome do beneficiário e o CPF por meio de expressões regulares. A partir dessas informações, o script agrupa as páginas correspondentes a cada pessoa e gera um novo arquivo PDF individual para cada beneficiário.",
            "Além da separação, cada documento é protegido com senha, utilizando o CPF do beneficiário sem formatação. Isso garante segurança no compartilhamento dos arquivos e restringe o acesso às informações sensíveis. Os arquivos gerados são organizados automaticamente em uma pasta, com nomes tratados para evitar caracteres inválidos.",
            "Sem automação, esse processo exige a leitura manual de cada página, identificação do beneficiário, separação dos documentos, criação de novos arquivos e definição de senha individualmente. Em média, esse fluxo pode levar entre um e dois minutos por beneficiário, o que representa cerca de duas a três horas de trabalho para um conjunto de cem pessoas.",
            "Antes um processo de 100 identificadores, o tempo total era de aproximadamente três horasc, com a automação, todo o processamento é realizado em poucos segundos ou minutos, dependendo do tamanho do arquivo. Isso representa uma redução significativa no tempo operacional, além de eliminar erros humanos e padronizar a entrega dos documentos.",
          ]
        },
      }}
    />
  );
}
