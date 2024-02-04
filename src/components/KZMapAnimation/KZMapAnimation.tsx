import classNames from "classnames";
import { motion } from "framer-motion";
import styles from "./KZMapAnimation.module.scss";
import { IKZMapAnimation } from "./KZMapAnimation.type";

export const KZMapAnimation = ({ className, ...props }: IKZMapAnimation) => {
  return (
    <div
      className={classNames("relative h-[400px] w-[700px]", className)}
      {...props}
    >
      <img
        alt="Карта Казахстана"
        className="absolute left-2/4 top-2/4 h-full w-full -translate-x-2/4 -translate-y-2/4 object-contain"
        height={400}
        src="/imgs/404/map.svg"
        width={733}
      />
      <img
        alt="404"
        className="absolute left-2/4 top-2/4 z-[3] h-full w-[350px] -translate-x-2/4 -translate-y-2/4 object-contain"
        height={200}
        src="/imgs/404/404.svg"
        width={300}
      />
      <div className="absolute left-2/4 top-2/4 -translate-x-2/4 -translate-y-2/4 scale-[0.5]">
        <svg
          fill="none"
          height="765"
          viewBox="0 0 1136 765"
          width="1136"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M813.726 216.739C919.114 192.981 1016.76 0.263029 1063.34 97.6189C1083.43 139.592 1038.37 234.784 1039.42 281.291C1042.87 434.198 1202.95 570.578 1101.2 606.552C1065.18 619.288 1041.25 611.388 1003.35 606.552C910.409 594.694 868.007 514.538 786.586 503.838C705.166 493.139 726.949 622.958 726.949 693.217C726.949 763.476 575.302 764.722 471.975 763.833C260.483 762.013 66.7397 575.973 27.376 454.978C-30.5928 276.796 -0.835387 51.6115 195.574 5.60433C391.982 -40.4028 564.856 272.841 813.726 216.739Z"
            stroke="currentColor"
            strokeDasharray="10 10"
          />
        </svg>
        <motion.svg
          animate={{ offsetDistance: "100%", opacity: 1 }}
          className={styles.firstTrain}
          fill="none"
          height="158"
          initial={{ offsetDistance: "0%", opacity: 0 }}
          transition={{
            ease: "easeInOut",
            duration: 12,
            repeat: Infinity,
            opacity: {
              duration: 0.3,
            },
          }}
          viewBox="0 0 416 158"
          width="416"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0.548218 20.0886C0.548218 9.04293 9.50252 0.088623 20.5482 0.088623H395.548C406.594 0.088623 415.548 9.04293 415.548 20.0886V137.089C415.548 148.134 406.594 157.089 395.548 157.089H20.5482C9.50253 157.089 0.548218 148.134 0.548218 137.089V20.0886Z"
            fill="#D4E1F0"
          />
          <path
            d="M41.5482 13.0886C38.2345 13.0886 35.5482 15.7749 35.5482 19.0886C35.5482 22.4023 38.2345 25.0886 41.5482 25.0886H63.5482V13.0886H41.5482Z"
            fill="#244563"
          />
          <path
            d="M95.5482 13.0886H67.5482V25.0886H95.5482V13.0886Z"
            fill="#244563"
          />
          <path
            d="M163.548 13.0886H191.548V25.0886H163.548V13.0886Z"
            fill="#244563"
          />
          <path
            d="M287.548 13.0886H259.548V25.0886H287.548V13.0886Z"
            fill="#244563"
          />
          <path
            d="M127.548 13.0886H99.5482V25.0886H127.548V13.0886Z"
            fill="#244563"
          />
          <path
            d="M195.548 13.0886H223.548V25.0886H195.548V13.0886Z"
            fill="#244563"
          />
          <path
            d="M383.548 13.0886H355.548V25.0886H383.548V13.0886Z"
            fill="#244563"
          />
          <path
            d="M291.548 13.0886H319.548V25.0886H291.548V13.0886Z"
            fill="#244563"
          />
          <path
            d="M131.548 13.0886H159.548V25.0886H131.548V13.0886Z"
            fill="#244563"
          />
          <path
            d="M255.548 13.0886H227.548V25.0886H255.548V13.0886Z"
            fill="#244563"
          />
          <path
            d="M351.548 13.0886H323.548V25.0886H351.548V13.0886Z"
            fill="#244563"
          />
          <path
            d="M41.5482 131.089C38.2345 131.089 35.5482 133.775 35.5482 137.089C35.5482 140.402 38.2345 143.089 41.5482 143.089H63.5482V131.089H41.5482Z"
            fill="#244563"
          />
          <path
            d="M67.5482 131.089H95.5482V143.089H67.5482V131.089Z"
            fill="#244563"
          />
          <path
            d="M191.548 131.089H163.548V143.089H191.548V131.089Z"
            fill="#244563"
          />
          <path
            d="M259.548 131.089H287.548V143.089H259.548V131.089Z"
            fill="#244563"
          />
          <path
            d="M99.5482 131.089H127.548V143.089H99.5482V131.089Z"
            fill="#244563"
          />
          <path
            d="M223.548 131.089H195.548V143.089H223.548V131.089Z"
            fill="#244563"
          />
          <path
            d="M355.548 131.089H383.548V143.089H355.548V131.089Z"
            fill="#244563"
          />
          <path
            d="M319.548 131.089H291.548V143.089H319.548V131.089Z"
            fill="#244563"
          />
          <path
            d="M159.548 131.089H131.548V143.089H159.548V131.089Z"
            fill="#244563"
          />
          <path
            d="M227.548 131.089H255.548V143.089H227.548V131.089Z"
            fill="#244563"
          />
          <path
            d="M323.548 131.089H351.548V143.089H323.548V131.089Z"
            fill="#244563"
          />
          <path
            d="M0.548218 51.0886H415.548V54.1157H0.548218V51.0886Z"
            fill="white"
          />
          <path
            d="M0.548218 72.2778H415.548V75.3048H0.548218V72.2778Z"
            fill="white"
          />
          <path
            d="M0.548218 61.6832H415.548V64.7102H0.548218V61.6832Z"
            fill="white"
          />
          <path
            d="M0.548218 82.8724H415.548V85.8994H0.548218V82.8724Z"
            fill="white"
          />
          <path
            d="M0.548218 93.467H415.548V96.494H0.548218V93.467Z"
            fill="white"
          />
          <path
            d="M0.548218 104.062H415.548V107.089H0.548218V104.062Z"
            fill="white"
          />
          <path
            d="M163.548 51.0886C163.548 46.6703 167.13 43.0886 171.548 43.0886H344.548C348.966 43.0886 352.548 46.6703 352.548 51.0886V107.089C352.548 111.507 348.966 115.089 344.548 115.089H171.548C167.13 115.089 163.548 111.507 163.548 107.089V51.0886Z"
            fill="white"
          />
          <path
            d="M67.5482 59.0886H107.548V99.0886H67.5482V59.0886Z"
            fill="#C4D0E2"
          />
          <path
            d="M74.8209 66.3614H101.003V92.5432H74.8209V66.3614Z"
            fill="white"
          />
          <path
            d="M74.8209 66.3614H101.003V92.5432H74.8209V66.3614Z"
            fill="white"
          />
          <path
            d="M80.6391 72.1795H95.1846V86.725H80.6391V72.1795Z"
            fill="white"
          />
          <path
            d="M80.6391 72.1795H95.1846V86.725H80.6391V72.1795Z"
            fill="#244563"
          />
        </motion.svg>
        <motion.svg
          animate={{ offsetDistance: "102.1%", opacity: 1 }}
          className={styles.firstSecond}
          exit={{
            opacity: 0,
          }}
          fill="none"
          height="157"
          initial={{ offsetDistance: "2.1%", opacity: 0 }}
          transition={{
            ease: "easeInOut",
            duration: 12,
            repeat: Infinity,
            opacity: {
              duration: 0.3,
            },
          }}
          viewBox="0 0 539 157"
          width="539"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M21 19C21 8.50659 29.5066 0 40 0H417.999C461.336 0 501.682 22.0984 525.017 58.6166L531.94 69.4516C536.227 76.1606 536.127 84.7734 531.684 91.3805L525.306 100.865C501.712 135.955 462.201 157 419.916 157H40C29.5066 157 21 148.493 21 138V19Z"
            fill="#C4D0E2"
          />
          <path
            d="M11 19C11 8.50659 19.5066 0 30 0H407.999C451.336 0 491.682 22.0984 515.017 58.6166L521.94 69.4516C526.227 76.1606 526.127 84.7734 521.684 91.3805L515.306 100.865C491.712 135.955 452.201 157 409.916 157H30C19.5066 157 11 148.493 11 138V19Z"
            fill="#D4E1F0"
          />
          <path d="M11 52H381V55.027H11V52Z" fill="white" />
          <path d="M11 73.1892H381V76.2162H11V73.1892Z" fill="white" />
          <path d="M11 62.5946H381V65.6216H11V62.5946Z" fill="white" />
          <path d="M11 83.7838H381V86.8108H11V83.7838Z" fill="white" />
          <path d="M11 94.3784H381V97.4054H11V94.3784Z" fill="white" />
          <path d="M11 104.973H381V108H11V104.973Z" fill="white" />
          <g filter="url(#filter0_i_485_20667)">
            <path
              d="M144 51C144 46.5817 147.582 43 152 43H325C329.418 43 333 46.5817 333 51V107C333 111.418 329.418 115 325 115H152C147.582 115 144 111.418 144 107V51Z"
              fill="white"
            />
          </g>
          <path
            d="M144 51.2222C144 46.6812 147.676 43 152.212 43H329.788C334.324 43 338 46.6812 338 51.2222V108.778C338 113.319 334.324 117 329.788 117H152.212C147.676 117 144 113.319 144 108.778V51.2222Z"
            fill="white"
          />
          <path d="M75 56H115V96H75V56Z" fill="#C4D0E2" />
          <path
            d="M82.2727 63.2727H108.455V89.4545H82.2727V63.2727Z"
            fill="white"
          />
          <path
            d="M82.2727 63.2727H108.455V89.4545H82.2727V63.2727Z"
            fill="white"
          />
          <path
            d="M88.0909 69.0909H102.636V83.6364H88.0909V69.0909Z"
            fill="white"
          />
          <path
            d="M88.0909 69.0909H102.636V83.6364H88.0909V69.0909Z"
            fill="#244563"
          />
          <path
            d="M39 14C35.6863 14 33 16.6863 33 20C33 23.3137 35.6863 26 39 26H61V14H39Z"
            fill="#244563"
          />
          <path d="M93 14H65V26H93V14Z" fill="#244563" />
          <path d="M161 14H189V26H161V14Z" fill="#244563" />
          <path d="M285 14H257V26H285V14Z" fill="#244563" />
          <path d="M125 14H97V26H125V14Z" fill="#244563" />
          <path d="M193 14H221V26H193V14Z" fill="#244563" />
          <path d="M381 14H353V26H381V14Z" fill="#244563" />
          <path d="M289 14H317V26H289V14Z" fill="#244563" />
          <path d="M129 14H157V26H129V14Z" fill="#244563" />
          <path d="M253 14H225V26H253V14Z" fill="#244563" />
          <path d="M349 14H321V26H349V14Z" fill="#244563" />
          <path
            d="M39 132C35.6863 132 33 134.686 33 138C33 141.314 35.6863 144 39 144H61V132H39Z"
            fill="#244563"
          />
          <path d="M65 132H93V144H65V132Z" fill="#244563" />
          <path d="M189 132H161V144H189V132Z" fill="#244563" />
          <path d="M257 132H285V144H257V132Z" fill="#244563" />
          <path d="M97 132H125V144H97V132Z" fill="#244563" />
          <path d="M221 132H193V144H221V132Z" fill="#244563" />
          <path d="M353 132H381V144H353V132Z" fill="#244563" />
          <path d="M317 132H289V144H317V132Z" fill="#244563" />
          <path d="M157 132H129V144H157V132Z" fill="#244563" />
          <path d="M225 132H253V144H225V132Z" fill="#244563" />
          <path d="M321 132H349V144H321V132Z" fill="#244563" />
          <path
            d="M405 51L478.889 55.6667C491.567 56.4674 502.394 65.1033 505.994 77.2857C506.324 78.4047 506.324 79.5953 505.994 80.7143C502.394 92.8967 491.567 101.533 478.889 102.333L405 107V51Z"
            fill="#244563"
          />
          <path
            d="M405 111H472.256C480.889 111 484.667 121.899 477.886 127.242C469.865 133.563 459.949 137 449.736 137H405V111Z"
            fill="#244563"
          />
          <path
            d="M405 47H472.256C480.889 47 484.667 36.1007 477.886 30.7578C469.865 24.4371 459.949 21 449.736 21H405V47Z"
            fill="#244563"
          />
          <rect fill="#244563" height="73" width="11" y="42" />
          <defs>
            <filter
              colorInterpolationFilters="sRGB"
              filterUnits="userSpaceOnUse"
              height="72"
              id="filter0_i_485_20667"
              width="189"
              x="144"
              y="43"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend
                in="SourceGraphic"
                in2="BackgroundImageFix"
                mode="normal"
                result="shape"
              />
              <feColorMatrix
                in="SourceAlpha"
                result="hardAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              />
              <feOffset dx="4" dy="4" />
              <feComposite
                in2="hardAlpha"
                k2="-1"
                k3="1"
                operator="arithmetic"
              />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0.768627 0 0 0 0 0.815686 0 0 0 0 0.886275 0 0 0 1 0"
              />
              <feBlend
                in2="shape"
                mode="normal"
                result="effect1_innerShadow_485_20667"
              />
            </filter>
          </defs>
        </motion.svg>
      </div>
    </div>
  );
};
