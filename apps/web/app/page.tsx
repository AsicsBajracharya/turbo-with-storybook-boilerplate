import { Button } from "@repo/ui/Button/button";
import Image, { type ImageProps } from "next/image";
// import { Button } from "@repo/ui/button";
import styles from "./page.module.css";

type Props = Omit<ImageProps, "src"> & {
  srcLight: string;
  srcDark: string;
};

const ThemeImage = (props: Props) => {
  const { srcLight, srcDark, ...rest } = props;

  return (
    <>
    <Button>555</Button>
      {/* <Image {...rest} src={srcLight} className="imgLight" />https://www.youtube.com/watch?list=RD_oRAsYlhKoU&v=L4DdAch5aio
      <Image {...rest} src={srcDark} className="imgDark" /> */}
    </>
  );
};

export default function Home() {
  return (
    <div>
      <main>
        <Button>test55</Button>
      </main>
      <footer>
      </footer>
    </div>
  );
}
