
# HardCodedDependencies

A classe Report representa um relatório e gera um pdf, e isso deveria ser separado. Quebra o **princípio da responsabilidade única** (S)

```java

public class HardCodedDependencies {
    public static void main(String[] args) {
        Report report = new Report("Relatório");
        PDFReportExporter pdfExporter = new PDFReportExporter();
        pdfExporter.export(report);
    }
}


class Report {
    private String content;

    public Report(String content) {
        this.content = content;
    }

    public String getContent() {
        return content;
    }
}

class PDFReportExporter {
    public void export(Report report) {
        System.out.println("Generating PDF... " + report.getContent());
    }
}
