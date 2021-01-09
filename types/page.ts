export default interface Page {
  id?: string;
  name?: string;
  headerName: string;
  title: string;
  href: string;
  subtitle?: string;
  content: JSX.Element;
}
