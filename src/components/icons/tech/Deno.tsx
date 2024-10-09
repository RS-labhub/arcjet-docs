import type { ForwardedRef, HTMLProps } from "react";
import { forwardRef } from "react";

export interface Props extends HTMLProps<SVGSVGElement> {}

export const Deno = forwardRef(
  ({ className, ...props }: Props, ref: ForwardedRef<SVGSVGElement>) => {
    let cls = "aj-Icon aj-Icon-deno";
    if (className) cls += " " + className;
    return (
      <svg
        ref={ref}
        viewBox="0 0 128 128"
        width="128"
        height="128"
        fill="currentColor"
        stroke="currentColor"
        className={cls}
        {...props}
      >
        <g clipPath="url(#clip0_861_237)">
          <path
            d="M62.3662 99.2288C60.5277 98.7332 58.6366 99.7975 58.0985 101.612L58.0746 101.697L53.3141 119.338L53.2926 119.423C52.8443 121.262 53.9435 123.134 55.782 123.63C57.6201 124.126 59.5112 123.062 60.0493 121.247L60.0732 121.163L64.8332 103.521L64.8552 103.435C64.8877 103.303 64.912 103.17 64.9288 103.037L64.9426 102.904L64.8298 102.332L64.665 101.509L64.5608 100.996C64.3376 100.565 64.0274 100.186 63.6494 99.8811C63.2719 99.5772 62.8346 99.3549 62.3662 99.2288ZM29.1939 81.061C29.1071 81.234 29.0334 81.4165 28.9749 81.6072L28.9419 81.7224L24.1814 99.364L24.1595 99.4496C23.7115 101.289 24.8107 103.16 26.649 103.656C28.4871 104.152 30.3784 103.088 30.9166 101.273L30.9401 101.188L35.2565 85.192C32.9958 83.9949 30.9667 82.6137 29.1939 81.061ZM17.8419 60.7736C16.0035 60.2775 14.1122 61.3414 13.5743 63.1565L13.5505 63.2411L8.79004 80.8827L8.7682 80.9678C8.32016 82.8068 9.41926 84.6778 11.2576 85.1739C13.0957 85.6699 14.987 84.6061 15.5252 82.791L15.5488 82.7064L20.3092 65.0648L20.331 64.9797C20.7791 63.1407 19.6803 61.2697 17.8419 60.7736ZM124.583 56.7673C122.745 56.2712 120.853 57.335 120.315 59.1501L120.292 59.2347L115.531 76.8764L115.509 76.9614C115.061 78.8004 116.16 80.6715 117.999 81.1675C119.837 81.6636 121.728 80.5998 122.266 78.7847L122.29 78.7001L127.05 61.0584L127.072 60.9734C127.52 59.1344 126.421 57.2633 124.583 56.7673ZM7.47473 33.2094C3.48799 40.4695 0.94942 48.4353 0 56.6636C0.45416 57.1811 1.0516 57.5529 1.71685 57.7312C3.55523 58.2278 5.44652 57.1634 5.98446 55.3483L6.00826 55.2642L10.7687 37.6223L10.7905 37.5372C11.2386 35.698 10.1395 33.8269 8.30109 33.3309C8.03145 33.2581 7.75393 33.2174 7.47473 33.2094ZM112.525 33.3309C110.687 32.8347 108.796 33.8988 108.258 35.7139L108.234 35.7982L103.474 53.44L103.452 53.5251C103.004 55.3641 104.103 57.2356 105.941 57.7312C107.779 58.2278 109.671 57.1634 110.209 55.3483L110.232 55.2642L114.993 37.6223L115.015 37.5372C115.463 35.698 114.364 33.8269 112.525 33.3309Z"
            stroke="none"
          />
          <path
            d="M28.1929 16.556C26.3548 16.0598 24.4635 17.1239 23.9253 18.939L23.9017 19.0233L19.1413 36.665L19.1194 36.7501C18.6714 38.5893 19.7705 40.4604 21.6089 40.9565C23.447 41.4526 25.3383 40.3882 25.8765 38.5733L25.9 38.4891L30.6604 20.8474L30.6823 20.7623C31.1303 18.9231 30.0312 17.0519 28.1929 16.556ZM89.3596 19.8908C87.5211 19.3946 85.63 20.4587 85.0919 22.2739L85.068 22.3581L81.8693 34.2117C83.9416 35.2352 85.9191 36.44 87.7792 37.8122L88.087 38.0418L91.8271 24.1822L91.8486 24.0971C92.2969 22.2579 91.1982 20.3867 89.3596 19.8908ZM58.2246 0C55.9918 0.19733 53.77 0.511175 51.5697 0.940292L51.1028 1.03329L46.6659 17.4809L46.6439 17.566C46.1961 19.4052 47.2953 21.2764 49.1333 21.7723C50.9718 22.2685 52.8629 21.2044 53.4011 19.3893L53.4245 19.305L58.185 1.66333L58.207 1.57821C58.3336 1.06044 58.3398 0.520494 58.2246 0ZM102.029 12.1862L101.094 15.6529L101.072 15.7377C100.624 17.577 101.723 19.4481 103.561 19.944C105.399 20.4402 107.291 19.3761 107.829 17.561L107.852 17.4767L107.955 17.1006C106.204 15.4635 104.364 13.9248 102.442 12.4917L102.029 12.1862ZM74.3322 0.575167L72.6437 6.8318L72.6222 6.91692C72.1739 8.75611 73.2731 10.6273 75.1116 11.1232C76.9497 11.6194 78.8408 10.5553 79.3794 8.74015L79.4028 8.65589L81.1797 2.07051C79.0884 1.49228 76.9693 1.02077 74.8302 0.657751L74.3322 0.575167Z"
            stroke="none"
          />
          <path
            d="M38.6009 110.153C39.1388 108.338 41.0303 107.274 42.8684 107.77C44.7069 108.266 45.8056 110.137 45.3578 111.977L45.3358 112.062L41.9288 124.687L41.4528 124.512C39.4014 123.746 37.3908 122.875 35.4287 121.903L38.5771 110.237L38.6009 110.153Z"
            stroke="none"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M24.1123 62.4883C24.1123 46.168 40.3279 33.0447 61.174 33.0447C71.2011 33.0447 79.8016 35.8206 86.5712 41.1146C94.9858 47.6954 98.1658 56.7538 100.887 66.5844L111.802 107.29C101.568 118.543 87.6016 126.003 72.4972 128C71.5909 121.838 70.4174 115.699 69.2479 109.58C69.1889 109.272 69.1299 108.963 69.071 108.655C68.8515 107.506 68.6231 106.3 68.3916 105.078C67.1768 98.6669 65.8769 91.8065 65.339 90.3109C64.6991 88.5302 64.1304 87.2087 62.1633 87.2508C39.033 87.7435 24.1123 77.9019 24.1123 62.4883ZM70.1347 49.3114C70.1347 46.8367 68.1289 44.8309 65.6543 44.8309C63.1796 44.8309 61.1738 46.8367 61.1738 49.3114C61.1738 51.786 63.1796 53.7918 65.6543 53.7918C68.1289 53.7918 70.1347 51.786 70.1347 49.3114Z"
            stroke="none"
          />
        </g>
        <defs>
          <clipPath id="clip0_861_237">
            <rect width="128" height="128" fill="currentColor" />
          </clipPath>
        </defs>
      </svg>
    );
  },
);
