export default function dateFormatter(date: Date): string {
  const parsedDate = new Date(date).toLocaleDateString('pt-BR');
  return parsedDate;
}
