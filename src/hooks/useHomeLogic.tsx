import { useRef, useState } from "react";
import { useInView } from "react-intersection-observer";
import { mergeRefs } from "react-merge-refs";

export default function useHomeLogic() {
  //*filtering the category by user
  const [category, setCategory] = useState<string | null>(null);

  //*show and hide arrow to top
  const [showArrow, setShowArrow] = useState(false);
  const { ref } = useInView();
  //*head ref for scrolling to
  const HeadRef = useRef<HTMLDivElement | null>(null);
  const HeadRefMerged = mergeRefs([HeadRef, ref]);
  //*Products ref for scrolling to
  const ProductsRef = useRef<HTMLDivElement | null>(null);

  //*handle filtering category
  function handleCategory(value: string) {
    setCategory(value);
    ProductsRef.current!.scrollIntoView({ behavior: "smooth" });
  }

  //*scroll to top
  function handleGoTop() {
    HeadRef.current!.scrollIntoView({ behavior: "smooth" });
  }

  return {
    category,
    setCategory,
    showArrow,
    setShowArrow,
    HeadRefMerged,
    ProductsRef,
    handleCategory,
    handleGoTop,
  };
}
