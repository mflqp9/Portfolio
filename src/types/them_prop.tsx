
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
 type InstituteProps =  {
  index:number;
  title: string;
  institute: string;
  duration: string;
  summary: string;
};
type CProjProps={
  title:string;
  summary:string;
}
export type {Theme,InstituteProps,CProjProps};