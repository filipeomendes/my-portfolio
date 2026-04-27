import AutomationPage from "@/components/AutomationPage";

export default function Projeto3() {
  return (
    <AutomationPage
      number={3}
      image="/projeto3.jpg"
      repositoryUrl="https://github.com/filipeomendes/XML_to_Excel_Automation"
      content={{
        en: {
          title: "XML to Excel Converter",
          description: [
            "This project came from a very practical need: turning eSocial XML files, which are usually complex and not very user-friendly, into a structured dataset that can be easily analyzed in Excel",
            "The solution was built in Python and handles the XML parsing using ElementTree, following the eSocial namespace structure. While navigating through the file, the script extracts key information such as company IDs (CNPJ), tax codes, and their corresponding values. It also includes basic checks to handle missing fields, so the process doesn’t break when the XML isn’t perfectly structured.",
            "Once the data is extracted, it’s organized into a table format using Pandas. From there, the script calculates the difference between assessed and suspended amounts, which is a relevant metric for financial analysis. It also filters specific tax codes based on business requirements.",
            "One of the key parts of the project is the data pivoting step, where tax codes are transformed into columns. This makes the dataset much easier to read and analyze at a company level. On top of that, some aggregated fields were created, grouping values into categories like “Company”, “Third Parties”, and “RAT”.",
            "In the end, the script exports everything into a single Excel file with two sheets: one containing the raw extracted data and another with the processed and structured dataset ready for reporting."
          ],
        },
        pt_br: {
          title: "Conversor de XML para Excel",
          description: [
            "Esse projeto surgiu de uma necessidade bem prática: transformar arquivos XML do eSocial, que são complexos e pouco amigáveis para análise, em uma base organizada que pudesse ser usada diretamente no Excel.",
            "A solução foi construída em Python e faz toda a leitura do XML utilizando ElementTree, respeitando o padrão de namespaces do eSocial. Durante esse processo, o script percorre os nós principais e extrai informações como CNPJ, códigos de receita e valores associados. Também trata situações onde alguns campos não existem, evitando que o processamento quebre.",
            "Depois da extração, os dados são organizados com Pandas em formato tabular. A partir daí, o código calcula a diferença entre valores apurados e suspensos, que é uma informação importante para análise fiscal. Também há um filtro para considerar apenas determinados códigos de receita, conforme a necessidade do negócio.",
            "Uma parte interessante do projeto é o pivotamento dos dados, que transforma os códigos de receita em colunas. Isso facilita bastante a leitura e permite uma análise mais clara por empresa. Além disso, foram criadas algumas consolidações, agrupando valores em categorias como “Empresa”, “Terceiros” e “RAT”.",
            "No final, o script gera automaticamente um arquivo Excel com duas abas: uma com os dados brutos extraídos do XML e outra com a base já tratada e pronta para análise. Isso reduz bastante o trabalho manual e ajuda a evitar erros.",
            "No geral, é um projeto simples, mas muito útil no dia a dia, principalmente para quem trabalha com dados fiscais ou precisa transformar arquivos estruturados em informações utilizáveis.",
          ],
        },
      }}
    />
  );
}
