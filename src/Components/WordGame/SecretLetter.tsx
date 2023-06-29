export interface Props {
  secretLetter: string;
  index: number;
  isLetterShowing: boolean;
}
export const SecretLetter = (props: Props) => {
  return <span>{props.isLetterShowing && props.secretLetter}</span>;
};
