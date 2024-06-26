import { useRef, useEffect } from 'react'

export function useDisappearingElement() {
    const elementRef = useRef();

    

    useEffect(() => {
        console.log("ivyko useEffect");
        function handleMouseOver(e) {
            e.target.style.opacity = 0;
          }
    
          function handleMouseLeave(e) {
            e.target.style.opacity = 1;
          }
    
        elementRef.current.addEventListener("mouseover", handleMouseOver )
    
        elementRef.current.addEventListener("mouseleave", handleMouseLeave )

        return () => {
            elementRef.current.removeEventListener("mouseover", handleMouseOver)
            elementRef.current.removeEventListener("mouseleave", handleMouseLeave)
        }
           
    }, [elementRef.current])

      return elementRef;
}