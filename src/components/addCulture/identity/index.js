import React, { Component } from "react"
import ScrollIndicatorDark from "../../../images/addCulture/scrollIndicatorDark.svg"
import IdentityTriangle from "../../../images/addCulture/identityTriangle.svg"
import IdentityTopEllipses from "../../../images/addCulture/identityTopEllipses.svg"
import IdentityInverseVector from "../../../images/addCulture/identityInverseVector.svg"
import IdentityCircles from "../../../images/addCulture/identityCircles.svg"
import IdentityHalfCircle from "../../../images/addCulture/identityHalfCircle.svg"
import IdentityEllipse from "../../../images/addCulture/identityEllipse.svg"
import IdentityVector from "../../../images/addCulture/identityVector5.svg"
import "./index.css"
import AOS from "aos"

export default class Identity extends Component {
  componentDidMount() {
    AOS.init()
  }
  render() {
    return (
      <div id="identity" className="blogIdentity">
        <div className="row">
          <div
            data-aos="fade-right"
            data-duration="4000"
            className="scrollIndicatorDark"
          >
            <ScrollIndicatorDark tabIndex="0" alt="Scroll" />
          </div>
          <IdentityTriangle
            data-aos="fade-right"
            data-duration="4000"
            className="identityTriangle"
            tabIndex="0"
            alt="Triangle"
          />
          <IdentityTopEllipses
            data-aos="fade-down"
            data-duration="4000"
            className="identityTopEllipses"
            tabIndex="0"
            alt="Top Ellipses"
          />
          <IdentityInverseVector
            data-aos="fade-left"
            data-duration="4000"
            className="identityInverseVector"
            tabIndex="0"
            alt="Inverse Vector"
          />
          <svg
            className="identityLine"
            width="1094"
            height="1080"
            viewBox="0 0 1094 1080"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              className="identityPath"
              d="M-68 658.038C23.3044 652.031 110.996 591.26 186.106 544.316C368.312 430.437 555.854 276.056 670.376 91.6047C687.091 64.6829 782.336 -92.6206 724.244 -121.148C634.466 -165.235 516.856 -47.877 469.322 10.5303C339.947 169.501 289.238 401.335 293.842 601.993C301.497 935.619 447.237 1280.49 703.568 1498.16C776.231 1559.87 941.546 1672.51 1038.2 1591.75C1070.46 1564.81 1079.96 1523.61 1092.62 1485.65"
              stroke="black"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>

          <IdentityCircles
            data-aos="fade-down"
            data-duration="4000"
            className="identityCircles"
            tabIndex="0"
            alt="Circles"
          />
          <IdentityHalfCircle
            data-aos="fade-up"
            data-duration="4000"
            className="identityHalfCircle"
            tabIndex="0"
            alt="Bottom Circle"
          />
          <div className="identityContent">
            <svg
              className="identityScratch"
              width="21"
              height="373"
              viewBox="0 0 21 373"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                className="scratchPath"
                d="M5.4674 139.197C5.4674 200.648 -0.829897 265.53 10.103 326.268C10.58 328.918 14.7385 352.188 14.7385 339.248C14.7385 296.691 9.86162 254.362 9.27886 211.821C8.93322 186.589 9.17585 161.342 9.17585 136.107C9.17585 109.947 5.4674 188.339 5.4674 214.499C5.4674 261.48 3.57141 308.852 7.32163 355.73C7.74603 361.035 8.61054 365.656 10.618 370.563C13.1424 376.734 10.3604 357.222 9.79393 350.579C1.4798 253.077 -2.59455 153.646 5.05535 55.9631C6.3696 39.1811 7.95941 22.2269 11.7512 5.79593C14.4587 -5.93653 12.8843 13.1737 12.8843 14.1399C12.8843 84.1873 13.9544 154.286 11.0301 224.286C9.15717 269.118 7.6886 312.532 15.7687 356.76C16.099 358.568 18.3341 368.459 18.344 368.4C20.2063 357.226 18.2991 343.722 18.0349 332.655C16.3918 263.827 14.7385 195.066 14.7385 126.218C14.7385 94.5973 11.9702 189.398 10.618 220.989C9.71947 241.983 7.32163 262.802 7.32163 283.827"
                stroke="black"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>

            <svg
              class="identityPlus"
              width="278"
              height="277"
              viewBox="0 0 278 277"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <mask
                id="mask0"
                mask-type="alpha"
                maskUnits="userSpaceOnUse"
                x="0"
                y="0"
                width="278"
                height="277"
              >
                <path
                  d="M94.8761 0H182.803V94.72H277.34V182.28H182.803V277H94.8761V182.28H0.339844V94.72H94.8761V0Z"
                  fill="#F4F4F4"
                />
              </mask>
              <g mask="url(#mask0)">
                <path
                  className="pathPlus"
                  d="M96.5348 13.254C101.463 5.73862 107.403 1.8153 115.101 -2.96164C129.067 -11.6293 143.345 -19.761 157.637 -27.8726C157.97 -28.0617 168.811 -34.2607 166.802 -31.8678C159.01 -22.5833 148.702 -14.9692 139.894 -6.72179C109.113 22.0987 83.1813 55.193 53.8807 85.343C53.3918 85.846 41.7027 97.2301 40.9552 95.8596C38.2332 90.8693 65.7659 68.7771 67.1587 67.5411C101.302 37.2404 137.918 9.35129 174.205 -18.3547C174.752 -18.7724 182.083 -24.0333 181.197 -23.4074C170.933 -16.1624 160.678 -8.87468 150.469 -1.55159C118.834 21.1417 88.2356 44.9978 57.7583 69.1861C57.0163 69.775 47.8784 77.4825 53.5282 71.7125C66.8196 58.1383 83.0134 46.8559 98.5324 36.0499C114.432 24.9787 131.034 14.9297 147.884 5.38118C156.8 0.328747 166.344 -5.50351 176.379 -8.13184C184.416 -10.2368 167.468 6.04775 161.632 11.9614C134.683 39.2728 106.319 65.2547 77.4991 90.5719C66.6049 100.142 55.5786 109.606 44.2453 118.656C41.7439 120.653 34.8057 125.612 40.8964 118.832C53.3712 104.945 70.9416 95.1423 86.7819 85.7543C103.585 75.7954 120.734 66.3435 137.838 56.9069C141.45 54.9139 152.197 48.8318 148.824 51.2079C134.806 61.0843 121.095 71.1108 107.815 81.9941C89.5323 96.9772 35.7859 142.493 50.943 124.354C78.2587 91.6653 112.581 64.3638 144.124 35.8736C144.792 35.2707 157.703 23.348 153.995 26.4145C137.368 40.1631 118.989 51.7794 101.176 63.8984C83.5135 75.9155 64.1461 86.1043 47.0654 98.9148C43.209 101.807 56.448 96.3057 60.6372 93.9208C102.423 70.1316 140.731 39.8581 179.61 11.7264C202.643 -4.93935 225.644 -21.7952 249.467 -37.3317C250.44 -37.9662 265.204 -46.2363 263.156 -44.0882C260.537 -41.3409 252.314 -34.678 250.583 -33.2778C227.235 -14.3934 203.431 3.9365 179.904 22.5956C130.056 62.1301 80.899 102.42 32.3773 143.566C11.7013 161.1 -8.97653 178.631 -29.665 196.15C-35.6142 201.187 -42.5506 206.2 -47.4082 212.424C-48.159 213.386 -35.019 205.662 -34.1302 205.139C-11.1337 191.591 10.9091 176.53 32.4948 160.84C56.0443 143.722 76.5713 123.29 99.4724 105.495C103.023 102.736 107.672 97.9414 112.28 96.9172C120.601 95.0681 98.7452 107.311 91.5996 111.958C50.9981 138.363 11.6167 166.734 -29.2538 192.683C-30.6803 193.589 -32.3478 196.581 -33.5427 195.386C-33.856 195.073 -32.9431 194.73 -32.6027 194.446C-27.3152 190.04 -18.2399 183.047 -13.6844 179.64C37.7192 141.194 90.9228 105.077 144.007 69.0099C171.156 50.5639 198.451 32.5774 226.965 16.3091C227.002 16.2878 243.437 7.05795 240.772 9.43508C223.047 25.2438 203.204 38.7927 184.546 53.4405C149.383 81.0459 115.755 110.409 82.6693 140.453C65.1168 156.391 47.5367 172.308 30.7323 189.041C24.6202 195.127 15.0656 202.396 11.109 210.309C10.4587 211.61 13.8578 209.268 15.0454 208.429C30.6265 197.422 45.6773 185.687 61.2834 174.705C109.632 140.685 159.322 108.488 208.399 75.5314C231.375 60.102 254.467 44.9339 278.314 30.8797C284.143 27.4442 300.572 16.0347 296.116 21.1268C294.549 22.9174 292.21 23.8447 290.241 25.1807C276.315 34.6304 262.639 44.4458 249.056 54.3806C197.332 92.2118 146.745 131.601 96.1235 170.886C61.4939 197.761 27.8318 226.384 -8.27923 251.318C-59.206 286.482 92.7843 179.854 142.832 143.449C181.329 115.446 219.172 84.9716 260.101 60.4908C261.214 59.8249 264.052 57.4328 263.509 58.6107C263.242 59.1897 262.587 59.4932 262.099 59.9033C228.598 88.0435 347.043 -12.465 241.065 77.4114C174.812 133.599 109.394 190.785 44.3628 248.38C34.0532 257.511 23.5984 266.468 13.2241 275.524C11.3661 277.146 5.56709 281.583 7.81889 280.577C18.7895 275.675 32.9862 262.602 41.5427 256.136C121.385 195.797 199.147 132.982 281.604 76.1776C282.359 75.6579 301.244 62.817 289.242 70.9487C252.811 95.633 217.229 121.492 181.314 146.915C148.186 170.366 114.667 193.248 80.5542 215.244C72.6728 220.326 60.7084 225.278 53.9982 231.989C52.2137 233.773 58.6022 229.919 60.8722 228.816C71.7294 223.542 76.6314 221.06 88.2507 214.892C127.489 194.062 166.248 172.234 204.991 150.499C228.926 137.072 252.841 123.762 277.08 110.9C283.889 107.288 290.908 102.194 298.408 99.9723C299.638 99.6078 296.218 101.311 295.117 101.97C282.981 109.239 271.046 116.861 259.161 124.531C218.222 150.952 178.094 178.649 138.484 207.019C121.819 218.955 105.137 230.969 88.7795 243.328C88.2692 243.713 83.0286 247.666 81.788 248.851C78.9466 251.563 88.7553 245.201 92.0696 243.093C139.282 213.062 183.087 177.98 230.255 147.914C242.979 139.803 232.755 147.201 226.26 152.144C197.305 174.182 168.8 196.804 140.246 219.357C122.701 233.215 105.357 247.392 87.3107 260.601C71.879 271.896 91.2305 259.737 95.2422 256.958C155.172 215.443 208.262 163.644 271.029 126.293C277.425 122.487 284.171 117.8 291.24 115.248C291.884 115.015 290.726 116.594 290.182 117.01C276.174 127.722 261.706 137.854 247.646 148.502C187.657 193.929 128.274 240.473 71.3301 289.683C67.0736 293.362 59.0013 299.732 70.4488 292.915C107.916 270.603 142.251 242.983 176.614 216.302C210.037 190.35 311.583 114.172 277.433 139.16C230.775 173.3 186.094 210.147 140.834 246.089C139.659 247.023 116.02 264.911 130.729 254.961C163.972 232.473 195.753 207.748 228.434 184.458C256.327 164.579 284.469 144.455 314.271 127.468C318.871 124.846 324.777 121.791 329.546 119.361C332.558 117.825 340.765 112.255 338.653 114.895C336.882 117.109 333.941 118.05 331.603 119.654C312.299 132.899 293.283 146.554 273.967 159.782C230.023 189.876 185.787 219.663 140.775 248.146C131.87 253.78 122.604 259.054 114.102 265.301C112.244 266.666 111.4 267.467 114.219 265.83C123.595 260.386 132.584 254.114 141.539 248.028C167.352 230.485 192.756 212.325 218.211 194.27C231.674 184.72 244.96 174.525 259.279 166.245C266.121 162.287 246.306 175.282 239.832 179.817C211.676 199.537 183.733 219.62 155.992 239.92C144.486 248.34 133.132 256.982 121.681 265.477C113.703 271.397 120.423 267.68 124.971 264.596C167.369 235.844 207.999 204.477 252.346 178.7C252.849 178.408 264.753 172.153 260.512 175.528C236.447 194.682 210.656 211.809 186.308 230.637C156.778 253.474 127.771 277.012 99.2374 301.081C94.4214 305.144 91.2894 307.777 86.8407 311.833C84.9673 313.541 79.4833 315.978 81.6117 317.356C83.4213 318.527 85.7653 316.144 87.722 315.241C102.079 308.609 115.821 300.584 129.319 292.386C168.852 268.376 207.085 242.196 244.826 215.479C256.769 207.024 268.544 198.365 280.194 189.511C281.729 188.345 286.369 184.899 284.777 185.986C276.118 191.899 267.731 198.378 259.279 204.551C218.283 234.493 177.076 264.17 135.311 293.032C119.245 304.135 102.786 314.655 87.1344 326.345C87.0545 326.404 81.8396 330.299 80.9067 331.045C78.6829 332.824 85.9865 328.459 88.427 326.991C122.863 306.283 156.273 283.882 190.01 262.07C216.017 245.256 295.465 197.075 269.09 213.305C218.179 244.635 168.271 278.291 120.388 314.066C102.014 327.793 115.916 317.454 100.295 328.989C97.335 331.174 88.6643 333.724 91.6584 335.863C93.4192 337.12 95.7995 334.529 97.7098 333.513C110.796 326.549 122.955 317.656 135.194 309.365C182.072 277.612 228.273 245.29 276.317 215.362C303.498 198.429 219.547 245.016 191.008 259.543C182.352 263.95 157.802 279.079 164.864 272.41C187.98 250.579 213.6 231.309 236.659 209.31C237.276 208.722 250.242 197.9 241.77 201.731C206.857 217.521 174.251 239.202 141.245 258.486C118.871 271.558 96.3924 284.424 73.6214 296.792C70.8193 298.314 68.1246 300.08 65.1611 301.258C60.1416 303.252 72.4902 293.301 76.5003 289.683C136.679 235.389 199.374 181.895 266.446 136.164C267.772 135.26 272.6 132.057 274.26 130.641C276.51 128.722 268.41 131.836 265.741 133.109C220.418 154.715 176.776 180.69 133.549 206.138C99.4116 226.234 66.3472 247.887 32.9649 269.179C30.4554 270.779 24.2799 274.667 21.2144 276.464C20.024 277.162 16.0932 279.5 20.2744 276.053C73.6986 232.001 130.763 191.075 188.306 152.614C193.96 148.835 212.391 136.993 191.42 149.853C150.662 174.846 111.176 201.87 70.5663 227.112C47.9666 241.16 25.201 254.968 2.23743 268.415C1.37665 268.919 -5.59036 273.063 -7.5742 273.938C-13.1611 276.403 2.04094 266.402 6.99636 262.834C41.4995 237.988 76.4191 213.722 110.4 188.159C128.476 174.562 146.081 160.252 164.57 147.209C164.982 146.919 174.348 140.948 168.976 143.096C144.286 152.972 120.863 167.373 97.4748 179.875C72.2266 193.372 47.0376 206.983 21.5082 219.944C19.9657 220.728 13.3227 224.208 10.874 225.056C10.238 225.276 8.80211 226.019 8.87643 225.35C9.36887 220.918 14.9024 218.747 18.2768 215.832C55.4312 183.734 95.3867 154.64 134.489 125.001C155.838 108.818 177.167 92.6101 199.234 77.4114C202.1 75.4376 217.551 65.5156 203.111 71.8887C164.96 88.7281 128.932 110.624 92.4221 130.641C61.4767 147.607 30.1227 163.879 -0.347672 181.697C-3.08961 183.3 -8.13442 186.203 -11.0993 188.101C-15.1673 190.704 -2.70806 183.307 1.35614 180.698C85.0322 126.974 163.214 65.2843 246.412 10.9039C254.006 5.94034 277.289 -8.15858 269.619 -3.31416C231.789 20.5786 192.902 42.8418 154.288 65.426C115.701 87.9947 77.5356 111.32 38.8401 133.696C29.8788 138.878 17.7948 148.079 7.40762 150.676C5.97724 151.033 9.11391 148.234 10.2277 147.268C25.4726 134.045 42.0598 122.139 58.1108 109.96C99.0181 78.9207 139.731 47.4732 181.549 17.6604C191.543 10.536 203.829 4.5105 212.747 -4.01918C221.81 -12.6881 191.141 8.73634 180.609 15.5453C111.129 60.4643 42.4212 106.529 -26.6687 152.027C-52.5786 169.089 24.764 117.308 50.003 99.2673C100.632 63.0786 151.085 26.6501 202.171 -8.89562C218.13 -19.9997 234.322 -30.8081 250.936 -40.9156C261.471 -47.3251 228.654 -30.3176 217.799 -24.465C146.403 14.0316 75.3148 53.4171 4.99878 93.8621C1.51953 95.8633 -1.75543 98.3916 -5.57662 99.6198C-13.6205 102.205 7.71656 89.1827 14.5166 84.168C49.8628 58.1019 85.6121 32.8115 122.151 8.43629C143.341 -5.70004 164.421 -20.0711 185.838 -33.8653C188.67 -35.6889 192.427 -38.124 195.591 -39.7993C199.068 -41.6399 188.955 -35.5719 185.603 -33.5128C119.268 7.23603 53.0218 48.5767 -11.4519 92.217C-19.4858 97.6549 -27.5112 103.105 -35.5403 108.55C-43.4728 113.93 -19.1956 98.5264 -11.2168 93.2158C37.6546 60.6872 84.6858 25.0422 135.135 -5.07672C136.084 -5.64328 136.965 -6.37228 138.014 -6.72179C138.5 -6.88387 137.304 -5.97708 136.898 -5.66425C125.409 3.1877 113.256 11.3378 101.352 19.5992C62.7058 46.4203 23.7252 72.7822 -15.6233 98.5623C-270.423 265.5 145.589 -7.17278 -47.7607 119.537C-51.2499 121.823 -54.6987 124.172 -58.2186 126.411C-60.8791 128.103 -67.6028 133.656 -66.679 130.641C-64.9987 125.158 -59.028 122.072 -54.811 118.186C-31.4213 96.6292 -6.72576 76.4105 17.5718 55.9081C63.983 16.746 109.482 -24.0178 159.047 -59.2463C207.376 -93.5959 66.5524 14.9637 20.2744 52.0305C9.2571 60.8549 -1.46914 70.0707 -12.1569 79.2915C-13.0438 80.0567 -15.473 81.7933 -14.3307 82.0529C-9.66902 83.1123 1.88704 77.5478 5.11629 76.2364C33.6091 64.6654 60.8324 49.7124 87.487 34.4635C100.511 27.0124 113.75 18.1452 127.909 12.9015C128.611 12.6413 129.858 12.387 128.731 13.6065C122.578 20.2643 113.912 25.9586 106.934 31.4084C73.8475 57.2487 40.7217 82.9978 6.87885 107.845C-9.94651 120.198 -26.6037 132.844 -43.5893 144.977C-44.6992 145.769 -48.1391 147.979 -47.0557 147.15C-33.8838 137.078 -19.9348 127.914 -6.51666 118.186C32.9646 89.5616 71.0338 59.1027 110.107 29.9396C124.186 19.4314 138.477 9.00854 153.642 0.0934753C163.375 -5.62824 159.864 -2.4585 152.702 3.79487C121.346 31.1726 88.5943 57.0068 56.2307 83.1692C32.7739 102.131 9.17554 120.923 -14.1544 140.041C-17.8976 143.109 -21.8771 145.921 -25.3174 149.324C-29.4025 153.366 -14.3058 145.829 -9.21926 143.155C61.587 105.933 125.768 57.261 195.239 17.7779C196.381 17.1289 218.546 4.28329 207.107 13.959C175.185 40.9595 141.649 66.353 107.933 91.042C78.7109 112.44 49.3431 133.594 20.2744 155.199C19.1996 155.998 -3.24567 171.201 -2.63901 172.414C-1.86228 173.967 0.395607 170.722 1.88491 169.829C15.0474 161.931 27.8326 153.426 40.7202 145.094C88.0048 114.523 135.477 84.1674 184.017 55.6144C196.827 48.0792 209.811 40.7433 223.087 34.0523C224.401 33.3899 227.996 31.0182 227.082 32.1722C222.283 38.2342 208.707 46.5205 203.699 50.3267C140.726 98.1861 76.0193 143.751 13.9879 192.86C11.0524 195.184 5.93221 196.647 5.64506 200.38C5.59145 201.077 7.02951 200.984 7.70139 200.791C15.2044 198.637 32.4334 190.143 36.96 187.866C86.939 162.721 135.065 133.892 183.547 106.024C206.504 92.8274 229.356 79.3588 252.757 66.9535C257.304 64.5432 262.37 61.9271 267.093 59.727C269.475 58.6171 275.936 55.2494 274.672 57.5532C272.777 61.0037 269.02 63.048 265.976 65.5435C244.552 83.1063 222.492 99.9466 200.585 116.893C171.784 139.172 142.145 160.53 113.808 183.401C110.038 186.443 104.514 191.139 100.765 194.328C98.222 196.492 90.1586 201.546 93.4797 201.202C97.8209 200.753 101.72 198.292 105.7 196.502C124.779 187.922 143.01 177.666 161.162 167.302C201.253 144.413 240.685 120.392 281.311 98.4447C288.778 94.4109 296.334 90.4327 303.872 86.5181C307.299 84.7378 316.759 78.4521 314.271 81.4066C311.863 84.266 308.174 85.7343 305.105 87.8693C286.161 101.051 267.237 114.263 248.351 127.527C211.698 153.269 174.99 178.977 138.719 205.256C132.791 209.551 127.555 213.467 121.798 217.947C117.724 221.117 110.393 225.331 107.463 229.874C106.578 231.245 126.723 225.684 128.849 224.762C135.916 221.697 143.096 218.66 150.058 215.362C151.37 214.74 153.134 213.129 154.7 213.129C155.724 213.129 156.974 214.795 157.872 215.244"
                  stroke="#F4F4F4"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </g>
            </svg>

            <IdentityEllipse
              data-aos="fade-up"
              data-duration="4000"
              className="identityEllipse"
              tabIndex="0"
              alt="Ellipse"
            />
            <IdentityVector
              data-aos="fade-up"
              data-duration="4000"
              className="identityVector"
              tabIndex="0"
              alt="Vector"
            />
            <h1 class="identityHeading">
              AD+D <br /> CULTURE
            </h1>
            <p class="identityText">
              AMPLIFYING THE VOICES <br /> THAT SET THE TONE
            </p>
          </div>
        </div>
      </div>
    )
  }
}
