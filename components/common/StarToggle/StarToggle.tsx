import { Suspense, useState } from "react"
import { motion, Variants, Transition } from "framer-motion"
import StarIcon from "./StarIcon"
import "./styles.css"

const iconFadeTransition: Transition = { duration: 0.2, delay: 0.3 };
// FIXME: 코드 보완 필요
const buttonVariants: Variants = {
  rest: {
    // @ts-ignore
    "--button-star-greyscale": "100%",
    "--button-star-contrast": "0%",
    transition: { duration: 0.7 }
  },
  hover: {
    // @ts-ignore
    "--button-star-greyscale": "0%",
    "--button-star-contrast": "100%",
    scale: 1.2,
    y: -8
  },
  press: { scale: 1.1 }
}

const labelTextVariants: Variants = {
  unliked: { x: 24 },
  liked: { x: -46 }
}

const successTextVariants: Variants = {
  unliked: { opacity: 0 },
  liked: { opacity: 1 }
}

const likedTransition: Transition = {
  duration: 0.25,
  delay: 0.3
}

const currentCountVariants: Variants = {
  unliked: { opacity: 1, y: 0, transition: { duration: 0.25 } },
  liked: { opacity: 0, y: -40, transition: likedTransition }
}

const newCountVariants: Variants = {
  unliked: { opacity: 0, y: 40, transition: { duration: 0.25 } },
  liked: { opacity: 1, y: 0, transition: likedTransition }
}

const StarToggle = () => {
  const [isHover, setIsHover] = useState(false)
  const [isLiked, setIsLiked] = useState(false)

  return (
    <motion.button
      initial={false}
      animate={[isLiked ? "liked" : "unliked", isHover ? "hover" : "rest"]}
      whileTap="press"
      variants={buttonVariants}
      onHoverStart={() => setIsHover(true)}
      onHoverEnd={() => setIsHover(false)}
      onClick={() => setIsLiked(!isLiked)}
      className="star-toggle-button"
    >
      <motion.div
        className="star-toggle-icon"
        variants={{
          liked: { opacity: 0, transition: iconFadeTransition },
          hover: isLiked
            ? { opacity: 0, transition: iconFadeTransition }
            : { opacity: 1 }
        }}
      >
        <Suspense fallback={null}>
          <StarIcon isHover={isHover} isLiked={isLiked} />
        </Suspense>
      </motion.div>
      <div className="star-toggle-label">
        <motion.span variants={labelTextVariants} className="star-toggle-label-default">
          Star
          <motion.span variants={successTextVariants} className="star-toggle-labelsuccess">
            red
          </motion.span>
        </motion.span>
      </div>
      <div className="star-toggle-number">
        <motion.span variants={currentCountVariants} className="star-toggle-number-current">
          38
        </motion.span>
        <motion.span variants={newCountVariants} className="star-toggle-number-new">
          39
        </motion.span>
      </div>
    </motion.button>
  )
}

export default StarToggle