import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";

export default (element: HTMLElement[], fileName: string) => {
	const pdf = new jsPDF("p", "mm", "a4");
	element.forEach(async (el, ix) => {
		const canvas = await html2canvas(el, {
			scale: 1,
			useCORS: true,
			backgroundColor: '#ffffff'
		});
		const imgData = canvas.toDataURL("image/png");
		const pdfWidth = pdf.internal.pageSize.getWidth();
		const pdfHeight = (canvas.height * pdfWidth) / canvas.width;
		if (ix > 0) pdf.addPage();
		pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);

		if (ix === element.length - 1) pdf.save(`${fileName}.pdf`);
	})
};
