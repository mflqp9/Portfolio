type Theme = {
  body: string;
  text: string;
  expTxtColor: string;
  highlight: string;
  dark: string;
  secondaryText: string;
  imageHighlight: string;
  compImgHighlight: string;
  jacketColor: string;
  headerColor: string;
  splashBg: string;
};
type InstituteProps = {
  index: number;
  title: string;
  institute: string;
  duration: string;
  summary: string;
  highlights?: string[];
  technologies?: string[];
  projectLinks?: {
    label: string;
    url: string;
  }[];
  url?: string;
};
type CProjProps = {
  id: string;
  title: string;
  summary: string;
  role?: string;
  technologies?: string[];
  highlights?: string[];
  url?: string;
};
export type { Theme, InstituteProps, CProjProps };
