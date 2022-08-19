import React from "react";
import Button from "../../atoms/button/Button";
import introduce from "../../../assets/homepage_intro.png";
import { useNavigate } from "react-router-dom";

const IntroduceClub = () => {
  const navigate = useNavigate();
  return (
    <section className="relative w-full introduce min-w-[1280px] mb-10">
      <div className="z-0 introduce-bg">
        <img src={introduce} alt="" className="object-cover w-full" />
      </div>
      <div className="content pl-[100px] pt-[100px] absolute inset-0 z-10">
        <h1 className="mb-10 font-bold font-header text-primary">
          ECommerce Club <span>@UIT</span>
        </h1>
        <p className="mb-16 w-[520px] leading-10">
          Nơi kết nối, giao lưu, chia sẻ kiến thức của sinh viên Thương mại điện
          tử UIT - ĐHQG TP.HCM nói riêng và cộng đồng sinh viên có niềm đam mê
          với Thương mại điện tử nói chung. Là ngôi nhà chung cho mọi người được
          thể hiện và phát huy khả năng của bản thân mình.
        </p>
        <div className="flex items-center mb-24 action gap-x-9">
          <Button
            className="px-8 py-5 rounded-md btn-intro"
            onClick={() => navigate("/aboutus")}
          >
            Giới thiệu
          </Button>
          <button
            className="flex items-center gap-x-1"
            onClick={() => navigate("/news")}
          >
            <svg
              className="w-[80px h-[80px]"
              width="70"
              height="70"
              viewBox="0 0 70 70"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g filter="url(#filter0_d_2_2283)">
                <circle cx="33" cy="31" r="25" fill="white" />
              </g>
              <g clipPath="url(#clip0_2_2283)">
                <path
                  d="M40.2847 27.542L32.1026 21.5422C31.4635 21.0743 30.7073 20.7924 29.9179 20.7279C29.1284 20.6634 28.3365 20.8187 27.63 21.1767C26.9234 21.5347 26.3297 22.0814 25.9148 22.7561C25.4999 23.4308 25.2799 24.2072 25.2793 24.9993V37.0048C25.2781 37.7977 25.4969 38.5754 25.9114 39.2512C26.3259 39.9271 26.9199 40.4747 27.6271 40.8331C28.3344 41.1914 29.1272 41.3464 29.9174 41.2809C30.7075 41.2154 31.464 40.9319 32.1026 40.462L40.2847 34.4622C40.8276 34.0638 41.2691 33.5431 41.5734 32.9424C41.8777 32.3416 42.0362 31.6777 42.0362 31.0042C42.0362 30.3308 41.8777 29.6669 41.5734 29.0661C41.2691 28.4654 40.8276 27.9447 40.2847 27.5463V27.542Z"
                  fill="url(#paint0_linear_2_2283)"
                />
              </g>
              <defs>
                <filter
                  id="filter0_d_2_2283"
                  x="0"
                  y="0"
                  width="70"
                  height="70"
                  filterUnits="userSpaceOnUse"
                  colorinterpolationlilters="sRGB"
                >
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset dx="2" dy="4" />
                  <feGaussianBlur stdDeviation="5" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0.415686 0 0 0 0 0.741176 0 0 0 0 0.956863 0 0 0 0.2 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_2_2283"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_2_2283"
                    result="shape"
                  />
                </filter>
                <linearGradient
                  id="paint0_linear_2_2283"
                  x1="47.0823"
                  y1="19.0163"
                  x2="20.898"
                  y2="21.6068"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#00FFE0" />
                  <stop offset="0.524375" stopColor="#4BD0EE" />
                  <stop offset="1" stopColor="#86ABF9" />
                </linearGradient>
                <clipPath id="clip0_2_2283">
                  <rect
                    width="20.5882"
                    height="20.5882"
                    fill="white"
                    transform="translate(22.7058 20.7058)"
                  />
                </clipPath>
              </defs>
            </svg>
            <span>Sự kiện</span>
          </button>
        </div>
        <div className="flex info gap-x-6">
          <div className="flex info-item gap-x-5">
            <span>
              <svg
                width="34"
                height="34"
                viewBox="0 0 34 34"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M33.7194 7.08827C33.6197 5.31502 32.8703 3.64061 31.6145 2.38475C30.3586 1.12889 28.6842 0.379559 26.9109 0.27983C20.3088 -0.0932765 13.6908 -0.0932765 7.08864 0.27983C5.31537 0.379615 3.64096 1.12895 2.38505 2.38479C1.12914 3.64063 0.379713 5.31501 0.27983 7.08827C-0.0932765 13.6906 -0.0932765 20.3087 0.27983 26.911C0.379729 28.6843 1.12916 30.3587 2.38507 31.6145C3.64097 32.8703 5.31538 33.6197 7.08864 33.7195C13.6908 34.0935 20.3088 34.0935 26.9109 33.7195C28.6842 33.6197 30.3586 32.8704 31.6145 31.6145C32.8703 30.3587 33.6196 28.6843 33.7194 26.911C34.0925 20.3087 34.0925 13.6906 33.7194 7.08827Z"
                  fill="url(#paint0_linear_2_2290)"
                />
                <path
                  d="M7.57092 9.41968H26.4291C27.2134 9.42079 27.8771 9.99942 27.9851 10.7762L17 17.4889L6.01514 10.7758C6.12312 9.9992 6.7868 9.42079 7.57092 9.41968ZM26.4291 24.5233H7.57092C6.70375 24.5222 6.00111 23.8198 6 22.9526V11.7017L16.7921 18.2968C16.9196 18.3748 17.0804 18.3748 17.2079 18.2968L28 11.7017V22.9526C27.9989 23.8195 27.2962 24.5222 26.4291 24.5233Z"
                  fill="url(#paint1_linear_2_2290)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_2_2290"
                    x1="16.9996"
                    y1="-0.162898"
                    x2="16.9996"
                    y2="34.0024"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#FFEEF1" />
                    <stop offset="1" stopColor="#FFC6CF" />
                  </linearGradient>
                  <linearGradient
                    id="paint1_linear_2_2290"
                    x1="17"
                    y1="8.74815"
                    x2="17"
                    y2="24.5233"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#FD4685" />
                    <stop offset="1" stopColor="#FF9D8C" />
                  </linearGradient>
                </defs>
              </svg>
            </span>
            <div className="pr-5">
              <h6 className="font-bold leading-loose">Email</h6>
              <p className="mt-2 leading-none">ecommerceclub.uit@gmail.com</p>
            </div>
          </div>
          <div className="flex info-item gap-x-5">
            <span>
              <svg
                width="34"
                height="34"
                viewBox="0 0 34 34"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  opacity="0.25"
                  d="M33.7194 7.08827C33.6197 5.31502 32.8703 3.64061 31.6145 2.38475C30.3586 1.12889 28.6842 0.379559 26.9109 0.27983C20.3088 -0.0932766 13.6908 -0.0932766 7.08864 0.27983C5.31537 0.379615 3.64096 1.12895 2.38505 2.38479C1.12914 3.64063 0.379713 5.31501 0.27983 7.08827C-0.0932765 13.6906 -0.0932765 20.3087 0.27983 26.911C0.379729 28.6843 1.12916 30.3587 2.38507 31.6145C3.64097 32.8703 5.31538 33.6197 7.08864 33.7195C13.6908 34.0935 20.3088 34.0935 26.9109 33.7195C28.6842 33.6197 30.3586 32.8704 31.6145 31.6145C32.8703 30.3587 33.6196 28.6843 33.7194 26.911C34.0925 20.3087 34.0925 13.6906 33.7194 7.08827Z"
                  fill="url(#paint0_linear_2_2297)"
                />
                <path
                  d="M20.3415 20.0963L21.8115 18.6263C22.0095 18.4307 22.26 18.2969 22.5326 18.241C22.8052 18.1851 23.0882 18.2095 23.3471 18.3113L25.1387 19.0266C25.4004 19.1328 25.6248 19.3141 25.7837 19.5477C25.9425 19.7813 26.0286 20.0566 26.0312 20.3391V23.6203C26.0297 23.8125 25.9893 24.0023 25.9125 24.1784C25.8356 24.3545 25.724 24.5133 25.5842 24.6451C25.4444 24.7769 25.2794 24.8791 25.099 24.9455C24.9187 25.0118 24.7268 25.041 24.5349 25.0313C11.9809 24.2503 9.44776 13.6191 8.9687 9.55034C8.94646 9.35053 8.96678 9.14829 9.02832 8.9569C9.08986 8.76551 9.19122 8.58932 9.32574 8.43992C9.46027 8.29052 9.6249 8.1713 9.8088 8.09009C9.99271 8.00889 10.1917 7.96754 10.3928 7.96878H13.5625C13.8453 7.96961 14.1214 8.05505 14.3553 8.2141C14.5892 8.37315 14.7702 8.59854 14.875 8.86128L15.5903 10.6528C15.6954 10.9108 15.7223 11.194 15.6674 11.4671C15.6125 11.7402 15.4784 11.9911 15.2818 12.1885L13.8118 13.6585C13.8118 13.6585 14.6584 19.3875 20.3415 20.0963Z"
                  fill="url(#paint1_linear_2_2297)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_2_2297"
                    x1="44.2376"
                    y1="-2.80393"
                    x2="-8.62888"
                    y2="3.62022"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#00FFE0" />
                    <stop offset="0.524375" stopColor="#4BD0EE" />
                    <stop offset="1" stopColor="#86ABF9" />
                  </linearGradient>
                  <linearGradient
                    id="paint1_linear_2_2297"
                    x1="31.1719"
                    y1="6.56148"
                    x2="4.62767"
                    y2="9.78842"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#00FFE0" />
                    <stop offset="0.524375" stopColor="#4BD0EE" />
                    <stop offset="1" stopColor="#86ABF9" />
                  </linearGradient>
                </defs>
              </svg>
            </span>
            <div className="pr-5">
              <h6 className="font-bold leading-loose">Phone</h6>
              <p className="mt-2 leading-none">+8478 614 1234</p>
            </div>
          </div>
          <div className="flex info-item gap-x-5">
            <span>
              <svg
                width="37"
                height="34"
                viewBox="0 0 37 34"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_2_2307)">
                  <path
                    d="M34.5834 6.93586C34.4837 5.1626 33.7344 3.48819 32.4785 2.23232C31.2226 0.976454 29.5481 0.22711 27.7748 0.127363C21.1725 -0.245742 14.5544 -0.245742 7.95209 0.127363C6.17877 0.227166 4.50432 0.976518 3.24838 2.23237C1.99245 3.48821 1.243 5.16259 1.14312 6.93586C0.770003 13.5381 0.770003 20.1562 1.14312 26.7585C1.243 28.5317 1.99245 30.2061 3.24839 31.4619C4.50432 32.7178 6.17878 33.4671 7.95209 33.5669C14.5544 33.9411 21.1726 33.9411 27.7748 33.5669C29.5481 33.4672 31.2226 32.7178 32.4785 31.462C33.7344 30.2061 34.4837 28.5317 34.5834 26.7585C34.9566 20.1562 34.9566 13.5381 34.5834 6.93586Z"
                    fill="url(#paint0_linear_2_2307)"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M24.2638 9.54033C25.8672 11.1156 26.8328 13.2046 26.9819 15.4213C27.0613 16.6341 26.8787 17.8497 26.446 18.989C26.0222 20.1242 25.3319 21.1941 24.3947 22.1695L18.2371 28.5768C18.1757 28.6407 18.0899 28.6771 18.0001 28.6771C17.9103 28.6771 17.8243 28.6407 17.7628 28.5768L11.6054 22.1695C10.668 21.1941 9.97793 20.1242 9.5539 18.989C9.12118 17.8497 8.93882 16.6341 9.01803 15.4213C9.16735 13.2046 10.1328 11.1156 11.7361 9.54033C13.3956 7.91396 15.6495 7 18.0001 7C20.3505 7 22.6043 7.91396 24.2638 9.54033ZM11.7688 15.3411C11.7688 18.7831 14.5642 21.5836 18.0001 21.5836C21.436 21.5836 24.2314 18.7829 24.2314 15.3409C24.2314 11.8988 21.436 9.09835 18.0001 9.09835C14.5642 9.09835 11.7688 11.899 11.7688 15.3411ZM12.4194 15.3409C12.4194 12.2493 14.9227 9.73403 18 9.73403C21.0771 9.73403 23.5807 12.2495 23.5807 15.3411C23.5807 18.4329 21.0771 20.9479 18 20.9479C14.9227 20.9479 12.4194 18.4324 12.4194 15.3409ZM15.5058 15.2916C15.5058 15.4671 15.6513 15.6095 15.8311 15.6095H20.1689C20.3485 15.6095 20.4943 15.4671 20.4943 15.2916C20.4943 15.116 20.3485 14.9738 20.1689 14.9738H15.8311C15.6513 14.9738 15.5058 15.116 15.5058 15.2916Z"
                    fill="url(#paint1_linear_2_2307)"
                  />
                </g>
                <defs>
                  <linearGradient
                    id="paint0_linear_2_2307"
                    x1="17.8633"
                    y1="-0.0615775"
                    x2="17.8633"
                    y2="34.279"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#E8FFF2" />
                    <stop offset="1" stopColor="#C8FFE9" />
                  </linearGradient>
                  <linearGradient
                    id="paint1_linear_2_2307"
                    x1="18"
                    y1="7"
                    x2="18"
                    y2="28.6771"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#18C19F" />
                    <stop offset="1" stopColor="#8BF3AF" />
                  </linearGradient>
                  <clipPath id="clip0_2_2307">
                    <rect width="37" height="34" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </span>
            <div className="pr-10">
              <h6 className="font-bold leading-loose">Địa chỉ</h6>
              <p className="mt-2 leading-none">TP. Thủ Đức, TP.HCM</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroduceClub;
