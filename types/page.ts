export default interface Page {
  id: string;
  headerName: string;
  title: string;
  href: string;
  subtitle?: string;
  content: JSX.Element;
}
