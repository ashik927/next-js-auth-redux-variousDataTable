import React, { useEffect } from 'react'
import Image from 'next/image'
import prism_logo from "../../../public/assests/images/prism_logo.png"
import bg_cover from "../../../public/assests/images/bg_cover.svg"
// import styles from "./Login.module.css";
import Particles from "react-tsparticles";
import login from '../../../services/user.service';
import {userService} from '../../../services';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import { checkAuthnticateRedux } from '../../../redux/actions/authActions';


 const Login = () => {
    const router = useRouter();
    const dispatch = useDispatch()
    useEffect(() => {
        // redirect to home if already logged in
        if (userService.userValue) {
            router.push('/');
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const particlesInit = (main) => {
        console.log(main);
    
        // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
      };
    
      const particlesLoaded = (container) => {
        console.log(container);
      };

      const handleLogin =(e) => {
        e.preventDefault();
        login('test','test').then(() => {
            const returnUrl = router.query.returnUrl || '/';
            router.push(returnUrl);
             dispatch(checkAuthnticateRedux('setToken'));
        })
       
      }
    
  return (
    <>
    {/* <Particles id="tsparticles"  /> */}
            <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={{
                background: {
                color: {
                    value: "#0d47a1",
                },
                },
                fpsLimit: 1920,
                interactivity: {
                events: {
                    onClick: {
                    enable: true,
                    mode: "push",
                    },
                    onHover: {
                    enable: true,
                    mode: "repulse",
                    },
                    resize: true,
                },
                modes: {
                    bubble: {
                    distance: 400,
                    duration: 2,
                    opacity: 0.8,
                    size: 40,
                    },
                    push: {
                    quantity: 4,
                    },
                    repulse: {
                    distance: 200,
                    duration: 0.4,
                    },
                },
                },
                particles: {
                color: {
                    value: "#ffffff",
                },
                links: {
                    color: "#ffffff",
                    distance: 150,
                    enable: true,
                    opacity: 0.5,
                    width: 1,
                },
                collisions: {
                    enable: true,
                },
                move: {
                    direction: "none",
                    enable: true,
                    outMode: "bounce",
                    random: false,
                    speed: 6,
                    straight: false,
                },
                number: {
                    density: {
                    enable: true,
                    area: 800,
                    },
                    value: 80,
                },
                opacity: {
                    value: 0.5,
                },
                shape: {
                    type: "circle",
                },
                size: {
                    random: true,
                    value: 5,
                },
                },
                detectRetina: true,
            }}
            />
            {/* <Particles
                options={{
                    fullScreen: {
                    enable: true,
                    zIndex: 0
                    },
                    particles: {
                    number: {
                        value: 200,
                        limit: 300,
                        density: {
                        enable: true,
                        value_area: 800
                        }
                    },
                    color: {
                        value: "#ffffff"
                    },
                    shape: {
                        type: "circle",
                        stroke: {
                        width: 0,
                        color: "#000000"
                        },
                        polygon: {
                        nb_sides: 5
                        },
                        image: {
                        src: "images/github.svg",
                        width: 100,
                        height: 100
                        }
                    },
                    opacity: {
                        value: 0.5,
                        random: true,
                        anim: {
                        enable: true,
                        speed: 1,
                        opacity_min: 0.5,
                        sync: false
                        }
                    },
                    size: {
                        value: 30,
                        random: true,
                        anim: {
                        enable: true,
                        speed: 10,
                        size_min: 10,
                        sync: false
                        }
                    },
                    line_linked: {
                        enable: true,
                        distance: 100,
                        color: "#ffffff",
                        opacity: 1,
                        width: 1
                    },
                    move: {
                        enable: true,
                        speed: 3,
                        direction: "none",
                        random: false,
                        straight: false,
                        out_mode: "out",
                        bounce: false,
                        attract: {
                        enable: false,
                        rotateX: 600,
                        rotateY: 1200
                        }
                    }
                    },
                    interactivity: {
                    detect_on: "canvas",
                    events: {
                        onHover: {
                        enable: true,
                        mode: "bubble",
                        parallax: {
                            enable: false,
                            force: 60,
                            smooth: 10
                        }
                        },
                        onClick: {
                        enable: true,
                        mode: "push"
                        },
                        resize: true
                    },
                    modes: {
                        grab: {
                        distance: 400,
                        lineLinked: {
                            opacity: 1
                        }
                        },
                        bubble: {
                        distance: 400,
                        size: 100,
                        duration: 2,
                        opacity: 1,
                        speed: 2
                        },
                        repulse: {
                        distance: 200
                        },
                        push: {
                        particles_nb: 4
                        },
                        remove: {
                        particles_nb: 2
                        }
                    }
                    },
                    backgroundMask: {
                    enable: true,
                    cover: {
                        color: {
                        value: {
                            r: 0,
                            g: 0,
                            b: 0
                        }
                        }
                    }
                    },
                    retina_detect: true,
                    fps_limit: 60,
                    background: {
                    image: "url('https://particles.js.org/images/background3.jpg')"
                    }
                }}
             /> */}
        <section className="no-gutters vh-100 loginHeader" >
            <div className="col-lg-6 d-flex justify-content-end col-md-6 col-6">
                {/* <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1102"
            height="880"
            fill="none"
            viewBox="0 0 1102 880"
            >
            <path
                fill="#213851"
                d="M56.213 804.447h-.055l.136.934 275.455-28.926.087-.46.333.322 1.125-.69.948.547.381-1.352 274.806-166.25.726.449 1.313-2.017 148.496-182.719-.992-.777-263.074-213.195-4.661 1.564L252.475.417l-1.517-.43 20.357 285.676-339.754 114.036-.967 3.577 229.671 214.458L55.602 804.135l.611.312zm107-183.96L321.06 767.878 57.416 804.279l105.797-183.792zm443.705-17.138L416.31 485.966l21.121-74.688 111.826 4.534 58.01 187.13-.349.407zm-178.177-192.42l-20.632 69.984-123.102-75.811 143.734 5.827zm10.042-4.44l51.32-181.48 58.033 187.201-109.353-5.721zm51.32-181.48l-7.234 2.318-52.686 178.721-145.844-7.628-8.419-105.171 214.181-68.259.002.019zM285.252 408.486l122.008 75.311-77.729 263.658-45.849-336.248 1.57-2.721zm36.093 347.481l-154.698-141.44 114.124-198.258 40.574 339.698zm17.787 2.885l76.347-269.988 191.928 118.469-268.275 151.519zm270.793-159.078l-53.788-183.693 202.181 8.193-148.393 175.5zm146.871-176.669l-201.687-10.543-54.434-185.916 256.121 196.459zM252.567 1.463l232.348 212.549-209.707 70.37-22.641-282.92zM-65.693 402.1l337.646-107.587 7.757 108.877-.298 1.495.067.559-115.857 206.322-229.315-209.666z"
            ></path>
            <path
                fill="#839CAB"
                d="M496.878 225.452l.57-11.194-282.16-91.603-.569 1.762 282.159 101.035z"
            ></path>
            <path
                fill="#6A8195"
                d="M.196 130.402l214.837-2.448-.057-5.341L.139 129.254l.057 1.148z"
            ></path>
            <path
                fill="#6A8195"
                d="M10.706 439.163l9.201.756L1.09 130.121l-.893.281 10.51 308.761zM12.357 733.693l7.553-293.698-5.333-.041-2.83 292.433.61 1.306z"
            ></path>
            <path
                fill="#6A8195"
                d="M12.357 733.693l260.788-261.328-4.796-1.651L11.746 732.387l.61 1.306z"
            ></path>
            <path
                fill="#839CAB"
                d="M272.674 472.271l408.985-83.806-.369-1.462-408.983 79.262.367 6.006z"
            ></path>
            <path
                fill="#6A8195"
                d="M681.542 387.886l.563-.651-184.311-172.773-8.235 4.847 191.983 168.577z"
            ></path>
            <path
                fill="#839CAB"
                d="M268.282 475.438l5.365-3.054L1.103 130.392l.108 1.746 267.071 343.3z"
            ></path>
            <path
                fill="url(#paint0_linear_116_1537)"
                d="M480.766 713.99l17.598-489.423-8.091-4.633-12.578 493.946 3.071.11z"
            ></path>
            <path
                fill="url(#paint1_linear_116_1537)"
                d="M477.732 715.457l3.035-1.467L19.774 431.662l-9.068 7.501 467.026 276.294z"
            ></path>
            <path
                fill="url(#paint2_linear_116_1537)"
                d="M20.296 440.787L216.31 124.348l-2.613-1.624-202.99 316.439 9.589 1.624z"
            ></path>
            <path
                fill="url(#paint3_linear_116_1537)"
                d="M271.335 473.699l2.312-1.315-57.114-350.051-2.836.391 57.638 350.975z"
            ></path>
            <path
                fill="url(#paint4_linear_116_1537)"
                d="M273.647 472.384l224.717-247.817-2.356-10.445-224.673 256.226 2.312 2.036z"
            ></path>
            <path
                fill="url(#paint5_linear_116_1537)"
                d="M30.163 438.006l468.201-213.439-2.243-11.659L24.253 434.397l5.91 3.609z"
            ></path>
            <path
                fill="#4B5A66"
                d="M488.196 713.99L18.989 439.975l471.702-219.673-2.495 493.688zM561.362 463.726h287.114l-145.583 54.529-141.531-54.529z"
            ></path>
            <path
                fill="#4B5A66"
                d="M213.486 126.508l56.748 340.636L19.91 447.606l193.576-321.098zM827.773 572.635l144.678.826-57.845-34.29-86.833 33.464zM778.578 442.206h99.011l-34.85-15.956-64.161 15.956z"
            ></path>
            <path
                fill="#4E6B8B"
                d="M497.163 215.139L272.49 471.365l217.161-45.115 7.512-211.111zM270.234 467.144l-87.945-106.676 41.482-176.448 46.463 283.124z"
            ></path>
            <path
                fill="#4B5A66"
                d="M16.041 729.999l169.802-367.272-172.786 84.88 2.984 282.392z"
            ></path>
            <path
                fill="#192530"
                d="M.168 130.176l261.394 332.218-43.999-332.793-217.395.575zM497.163 215.139l-7.512 211.111 197.266-38.341-189.754-172.77zM16.041 729.999L272.49 471.365l66.523 160.894-322.972 97.74zM13.057 447.607L.168 130.176l-73.474 49.775 86.363 267.656zM368.757 147.2l-94.749-39.577 47.373-26.032 47.376 65.609zM199.737 703.821l145.201-47.44-12.3 33.425-132.901 14.015zM616.535 466.64l174.328.504-17.836 140.228L616.535 466.64zM868.567 539.17l114.814-91.563h-57.408l-57.406 91.563zM546.681 616.529l52.897 63.573v-56.48l-52.897-7.093z"
            ></path>
            <path
                fill="#4B5A66"
                d="M102.602 720.092l65.898-56.643v40.372l-65.898 16.271zM517.27 600.681l55.861 30.723-3.756-29.201-52.105-1.522zM344.938 261.666l-73.603 30.541 1.004-15.271 72.599-15.27zM73.978 111.998l44.017-25.566-29.439 4.883-14.578 20.683zM657.602 340.779l-18.036-43.33 21.686 6.608-3.65 36.722z"
            ></path>
            <path
                fill="#4E6B8B"
                d="M409.957 627.707l-88.576-102.859 94.64 75.833-6.064 27.026z"
            ></path>
            <path
                fill="#4B5A66"
                d="M321.381 110.706l-38.133-53.352 23.371-5.824 14.762 59.176zM734.18 464.805l-1.382 106.62-59.95-106.586 61.332-.034z"
            ></path>
            <path
                fill="#2C394F"
                d="M252.958 157.828l-18.408 63.659-17.255-44.885 35.663-18.774z"
            ></path>
            <path
                fill="#939EA7"
                d="M327.21 254.197l-42.017-4.135 26.096-16.09 15.921 20.225z"
            ></path>
            <path
                fill="#2C394F"
                d="M122.084 330.288l9.018-22.258 4.541 16.827-13.559 5.431zM161.358 213.089l6.396 53.75-27.249-28.253 20.853-25.497z"
            ></path>
            <path
                fill="#939EA7"
                d="M304.93 393.307l-16.969-12.147 15.13-.441 1.839 12.588z"
            ></path>
            <path
                fill="#2C394F"
                d="M180.34 349.062l-12.698-23.956 17.836 8.26-5.138 15.696z"
            ></path>
            <path
                fill="#939EA7"
                d="M288.806 104.718l15.722-11.284-4.142 13.435-11.58-2.151zM478.629 262.933l-12.363-38.221 23.893 16.651-11.53 21.57zM399.663 228.912l-17.087-24.775 20.731 6.802-3.644 17.973z"
            ></path>
            <path
                fill="#2C394F"
                d="M339.817 118.179L354.78 106.8l-3.661 13.154-11.302-1.775zM454.138 214.6l-8.807-27.638 17.198 12.096-8.391 15.542zM531.79 356.178l13.254-23.445 2.613 19.379-15.867 4.066z"
            ></path>
            <path
                fill="#939EA7"
                d="M508.717 358.072l13.192-24.028 2.907 19.687-16.099 4.341z"
            ></path>
            <path
                fill="#2C394F"
                d="M370.89 239.449l-19.971-21.778 21.084 3.802-1.113 17.976zM431.869 166.33l.732-21.007 8.781 12.462-9.513 8.545zM588.51 248.626l15.745-29.177 3.684 23.788-19.429 5.389z"
            ></path>
            <path
                fill="#939EA7"
                d="M607.547 265.183l19.023-24.363-.319 22.449-18.704 1.914z"
            ></path>
            <path
                fill="#2C394F"
                d="M427.107 280.357l-17.163-34.054 24.842 12.131-7.679 21.923z"
            ></path>
            <path
                fill="#939EA7"
                d="M311.108 175.137l13.74-22.562 1.947 19.084-15.687 3.478zM196.936 138.659l-5.705 58.943-22.529-36.572 28.234-22.371zM77.504 130.018l29.497-7.391-13.81 17.242-15.687-9.851z"
            ></path>
            <path
                fill="#2C394F"
                d="M30.365 97.22l22.074-15.56-5.942 18.702-16.132-3.142z"
            ></path>
            <path
                fill="#939EA7"
                d="M5.974 135.439l26.434-12.816-9.66 19.033-16.774-6.217z"
            ></path>
            <path
                fill="#2C394F"
                d="M98.837 150.811l31.835 9.883-22.73 8.29-9.105-18.173zM199.307 79.983l21.202.922-12.657 8.791-8.545-9.713zM220.27 105.657l23.204 18.951-21.714-.748-1.49-18.203zM126.021 109.675l27.495.968-16.314 11.531-11.181-12.499z"
            ></path>
            <path
                fill="#939EA7"
                d="M66.239 89.243l21.33-14.472-5.985 17.745-15.345-3.273z"
            ></path>
            <path
                fill="#2C394F"
                d="M9.498 68.026L29.981 55.49 23.637 71.74 9.498 68.026z"
            ></path>
            <path
                fill="#939EA7"
                d="M157.88 20.105L172.509 8.3l-3.281 13.258-11.348-1.451z"
            ></path>
            <path
                fill="#2C394F"
                d="M244.302 70.189l15.958-9.928-4.871 12.755-11.087-2.827zM371.232 108.141l15.026-11.294-3.735 13.136-11.291-1.842zM587.468 132.019l15.308-11.352-3.873 13.291-11.435-1.939z"
            ></path>
            <path
                fill="#939EA7"
                d="M758.665 233.059l21.633 9.564-16.693 3.988-4.94-13.552zM846.761 308.444l20.485 5.41-14.21 5.883-6.275-11.293z"
            ></path>
            <path
                fill="#2C394F"
                d="M688.152 312.78l21.959-16.258-5.567 19.055-16.392-2.797zM600.017 308.262l17.657-24.469.516 21.909-18.173 2.56zM454.464 400.27l20.014-8.43-7.874 13.674-12.14-5.244zM450.056 457.573l26.831 4.379-17.425 9.27-9.406-13.649zM516.085 258.296l-8.35-40.16 22.421 19.539-14.071 20.621zM524.122 231.888l-3.143-36.183 17.671 19.528-14.528 16.655zM400.187 346.92l12.716-25.064 3.632 20.08-16.348 4.984zM371.163 348.551l-1.047-26.684 12.297 14.96-11.25 11.724z"
            ></path>
            <path
                fill="#939EA7"
                d="M183.462 493.92l23.467-6.721-10.618 14.208-12.849-7.487z"
            ></path>
            <path
                fill="#2C394F"
                d="M110.568 486.026l-28.947 26.253 5.227-27.905 23.72 1.652zM71.016 405.192l7.12 47.392-24.877-24.257 17.757-23.135z"
            ></path>
            <path
                fill="#939EA7"
                d="M96.332 460.929l-26.87 36.563-.491-32.95 27.361-3.613z"
            ></path>
            <path
                fill="#2C394F"
                d="M-24.093 440.978l33.318-9.698-15.005 20.26-18.313-10.562zM47.996 390.901l34.196 31.153-33.41-2.965-.785-28.188zM121.009 441.035l-23.717 35.986-2.062-31.229 25.779-4.757zM-8.138 352.457l27.635-11.715-10.839 18.926-16.796-7.211z"
            ></path>
            <path
                fill="#2C394F"
                d="M-6.432 424.826L35.23 423l-23.277 19.381-18.385-17.555zM42.353 593.755l-5.215-23.496 13.308 11.28-8.093 12.216z"
            ></path>
            <path
                fill="#939EA7"
                d="M8.81 622.026l-11.231-21.548 15.932 7.515-4.701 14.033z"
            ></path>
            <path
                fill="#2C394F"
                d="M156.952 555.874l23.987-5.472-11.465 13.713-12.522-8.241zM325.197 675.743l16.123-18.571-1.18 17.826-14.943.745z"
            ></path>
            <path
                fill="#939EA7"
                d="M471.845 712.306l16.989 28.269-22.205-8.865 5.216-19.404z"
            ></path>
            <path
                fill="#2C394F"
                d="M682.135 781.506l16.141-9.626-5.11 12.66-11.031-3.034zM613.906 781.276l16.523-8.95-5.625 12.442-10.898-3.492z"
            ></path>
            <path
                fill="#939EA7"
                d="M434.69 622.693l20.869-27.765.103 25.226-20.972 2.539z"
            ></path>
            <path
                fill="#2C394F"
                d="M459.248 543.055l26.158 4.113-16.92 9.129-9.238-13.242zM573.948 652.974l16.341 9.286-13.513 1.819-2.828-11.105z"
            ></path>
            <path
                fill="#939EA7"
                d="M339.325 598.712l15.407-22.921 1.139 20.023-16.546 2.898zM490.714 175.103l3.627-22.314 7.682 14.491-11.309 7.823z"
            ></path>
            <path
                fill="#2C394F"
                d="M515.18 145.29l14.634-14.95-1.906 15.077-12.728-.127z"
            ></path>
            <path
                fill="#939EA7"
                d="M544.059 263.752l-2.794-40.97 19.567 22.447-16.773 18.523z"
            ></path>
            <path
                fill="#2C394F"
                d="M475.734 154.201l7.764-19.457 4.039 14.659-11.803 4.798zM535.25 213.552l3.653-31.811 11.828 19.99-15.481 11.821zM458.401 180.432l-1.313-22.355 10.556 12.34-9.243 10.015zM308.963 31.068l15.1-11.197-3.82 13.11-11.28-1.913zM451.215 41.513l15.1-11.197-3.821 13.11-11.279-1.913zM633.742 77.377l15.099-11.197-3.82 13.11-11.279-1.913zM887.537 166.132l-21.785-3.31 14.039-7.669 7.746 10.979z"
            ></path>
            <path
                fill="#939EA7"
                d="M950.487 203.937l-31.273-11.772 23.231-6.951 8.042 18.723z"
            ></path>
            <path
                fill="#2C394F"
                d="M941.747 332.637l20.32-4.092-9.95 11.302-10.37-7.21zM731.467 523.122l35.757-25.628-9.436 30.539-26.321-4.911z"
            ></path>
            <path
                fill="#939EA7"
                d="M706.801 519.063l31.599-23.434-7.994 27.44-23.605-4.006z"
            ></path>
            <path
                fill="#2C394F"
                d="M805.63 549.972l41.648 4.918-26.223 15.475-15.425-20.393zM723.946 550.197l32.212-23.111-8.49 27.523-23.722-4.412zM808.079 494.058l25.846 40.422-32.65-11.992 6.804-28.43zM853.359 498.907l-.638 38.525-16.514-22.544 17.152-15.981zM697.073 542.844l26.643-19.759-6.741 23.138-19.902-3.379zM811.461 446.622l17.134 30.35-23.202-10.005 6.068-20.345zM683.106 473.828l22.664-16.809-5.735 19.682-16.929-2.873zM766.317 452.865l35.972-.5-20.57 16.111-15.402-15.611zM660.784 482.044l20.334-15.077-5.145 17.656-15.189-2.579z"
            ></path>
            <path
                fill="#939EA7"
                d="M763.19 483.894l44.536.437-25.931 19.334-18.605-19.771z"
            ></path>
            <path
                fill="#2C394F"
                d="M562.621 449.638l15.717-10.305-4.569 12.869-11.148-2.564z"
            ></path>
            <path
                fill="#939EA7"
                d="M599.815 444.117l15.177-11.254-3.841 13.179-11.336-1.925zM775.913 533.351l49.295-1.251-27.94 22.403-21.355-21.152zM851.729 617.835l20.412 12.869-17.434 1.541-2.978-14.41z"
            ></path>
            <path
                fill="#2C394F"
                d="M907.31 662.892l18.69 3.862-12.491 5.988-6.199-9.85zM579.279 545.678l16.477 9.037-13.484 2.024-2.993-11.061z"
            ></path>
            <path
                fill="#939EA7"
                d="M399.422 686.913l32.068-26.638-6.862 29.499-25.206-2.861z"
            ></path>
            <path
                fill="#2C394F"
                d="M411.154 629.674l10.822-35.059 9.107 25.021-19.929 10.038zM427.688 747.618l14.02 23.657-18.469-7.506 4.449-16.151zM437.925 670.803l41.041-8.262-20.099 22.824-20.942-14.562z"
            ></path>
            <path
                fill="#939EA7"
                d="M529.917 754.314l12.358 17.743-14.918-4.819 2.56-12.924z"
            ></path>
            <path
                fill="#2C394F"
                d="M456.959 726.684l15.235 27.958-21.055-9.455 5.82-18.503zM555.178 762.521L570.3 774.79l-14.115-.442-1.007-11.827zM500.102 727.586l14.387 23.082-18.428-7.011 4.041-16.071z"
            ></path>
            <path
                fill="#939EA7"
                d="M391.086 651.677l-2.53-37.051 17.696 20.301-15.166 16.75z"
            ></path>
            <path
                fill="#2C394F"
                d="M321.822 622.385l14.712-21.115.75 18.674-15.462 2.441zM201.856 533.42l22.572-7.775-9.64 14.42-12.932-6.645zM123.115 403.012l-.354 37.151-16.073-21.628 16.427-15.523z"
            ></path>
            <path
                fill="#939EA7"
                d="M22.178 381.144l40.957-3.965L41.2 397.484l-19.023-16.34z"
            ></path>
            <path
                fill="#2C394F"
                d="M51.87 505.609L51 538.428 37.12 519.079l14.749-13.47zM41.803 358.913l33.158-7.935-15.685 19.167-17.474-11.232zM227.059 393.609l-12.987-19.949 16.245 5.817-3.258 14.132zM270.543 520.551l24.173-2.585-12.838 12.126-11.335-9.541zM274.437 548.026l23.757-.596-13.467 10.792-10.29-10.196z"
            ></path>
            <path
                fill="#939EA7"
                d="M189.913 362.446l-15.058-21.669 18.199 5.9-3.141 15.769z"
            ></path>
            <path
                fill="#2C394F"
                d="M218.831 252.679l58.836 21.783-43.546 13.287-15.29-35.07z"
            ></path>
            <path
                fill="#939EA7"
                d="M239.92 325.069l-30.816-27.004 29.64 2.052 1.176 24.952z"
            ></path>
            <path
                fill="#2C394F"
                d="M131.683 123.248l30.341 14.093-23.709 5.201-6.632-19.294zM161.03 90.388l24.177 3.74-15.612 8.472-8.565-12.212zM373.018 284.499l-27.072-18.649 23.817-1.13 3.255 19.779zM513.234 313.952l-3.189-40.999 19.808 22.292-16.619 18.707zM536.044 312.841l-.831-40.054 18.029 22.783-17.198 17.271zM582.015 400.868l15.189-11.262-3.843 13.192-11.346-1.93z"
            ></path>
            <path
                fill="#939EA7"
                d="M198.531 661.087l22.91-14.781-6.763 18.62-16.147-3.839z"
            ></path>
            <path
                fill="#2C394F"
                d="M154.629 675.932l18.504-18.679-2.509 18.934-15.995-.255zM53.552 674.292l-15.39-27.084 20.76 8.883-5.37 18.201z"
            ></path>
            <path
                fill="#939EA7"
                d="M38.18 705.411l-19.23-29.84 24.189 8.786-4.96 21.054z"
            ></path>
            <path
                fill="#2C394F"
                d="M27.92 726.898L8.706 696.217l24.547 9.283-5.333 21.398z"
            ></path>
            <path
                fill="#939EA7"
                d="M19.304 750.815L4.742 721.649l21.194 10.452-6.632 18.714z"
            ></path>
            <path
                fill="#2C394F"
                d="M48.701 765.092l-11.123-26.426 18.006 10.38-6.883 16.046zM23.718 775.024l-12.16-25.708 18.293 9.506-6.133 16.202zM-5.821 768.57l-4.874-28.227 15.184 14.169-10.31 14.058z"
            ></path>
            <path
                fill="#939EA7"
                d="M75.63 843.267l8.25-16.911 2.642 13.401-10.891 3.51z"
            ></path>
            <path
                fill="#2C394F"
                d="M153.32 878.086l15.1-11.197L164.6 880l-11.28-1.914zM387.762 576.341l25.511-24.938-3.816 25.632-21.695-.694z"
            ></path>
            <path
                fill="#939EA7"
                d="M258.66 454.461l12.825-16.621-.129 15.25-12.696 1.371z"
            ></path>
            <path
                fill="#2C394F"
                d="M277.057 368.27l-21.379-11.567 17.425-2.719 3.954 14.286z"
            ></path>
            <path
                fill="#939EA7"
                d="M353.084 392.438l6.945-19.618 4.582 14.392-11.527 5.226z"
            ></path>
            <path
                fill="#2C394F"
                d="M456.234 517.945l26.606 8.524-19.111 6.776-7.495-15.3z"
            ></path>
            <path
                fill="#939EA7"
                d="M512.91 527.368l18.107 9.215-14.503 2.64-3.604-11.855zM419.804 370.846l20.332-11.132-6.872 15.376-13.46-4.244z"
            ></path>
            <path
                fill="#2C394F"
                d="M447.168 341.039l9.279-29.778 7.684 21.29-16.963 8.488z"
            ></path>
            <path
                fill="#939EA7"
                d="M808.669 73.742l11.406-15.06.009 13.72-11.415 1.34z"
            ></path>
            <path
                fill="#2C394F"
                d="M866.248 66.692l4.601-18.246 5.337 12.57-9.938 5.676zM982.38 222.218l39.43-12.466-17.33 24.544-22.1-12.078z"
            ></path>
            <path
                fill="#939EA7"
                d="M1060.38 611.029l15.1-11.199-3.82 13.11-11.28-1.911zM1059.72 721.383l15.1-11.197-3.82 13.113-11.28-1.916z"
            ></path>
            <path
                fill="#2C394F"
                d="M1086.9 743.579l15.1-11.195-3.82 13.111-11.28-1.916z"
            ></path>
            <defs>
                <linearGradient
                id="paint0_linear_116_1537"
                x1="490.312"
                x2="479.313"
                y1="356.528"
                y2="609.026"
                gradientUnits="userSpaceOnUse"
                >
                <stop stopColor="#fff"></stop>
                <stop offset="1" stopColor="#91A4B3"></stop>
                </linearGradient>
                <linearGradient
                id="paint1_linear_116_1537"
                x1="3500440"
                x2="3092260"
                y1="643069"
                y2="1030030"
                gradientUnits="userSpaceOnUse"
                >
                <stop stopColor="#fff"></stop>
                <stop offset="1" stopColor="#91A4B3"></stop>
                </linearGradient>
                <linearGradient
                id="paint2_linear_116_1537"
                x1="1562590"
                x2="1398130"
                y1="524672"
                y2="359706"
                gradientUnits="userSpaceOnUse"
                >
                <stop stopColor="#fff"></stop>
                <stop offset="1" stopColor="#91A4B3"></stop>
                </linearGradient>
                <linearGradient
                id="paint3_linear_116_1537"
                x1="415427"
                x2="255785"
                y1="333966"
                y2="510212"
                gradientUnits="userSpaceOnUse"
                >
                <stop stopColor="#fff"></stop>
                <stop offset="1" stopColor="#91A4B3"></stop>
                </linearGradient>
                <linearGradient
                id="paint4_linear_116_1537"
                x1="1391950"
                x2="1499810"
                y1="387297"
                y2="504424"
                gradientUnits="userSpaceOnUse"
                >
                <stop stopColor="#fff"></stop>
                <stop offset="1" stopColor="#91A4B3"></stop>
                </linearGradient>
                <linearGradient
                id="paint5_linear_116_1537"
                x1="2980700"
                x2="3285820"
                y1="296357"
                y2="610543"
                gradientUnits="userSpaceOnUse"
                >
                <stop stopColor="#fff"></stop>
                <stop offset="1" stopColor="#91A4B3"></stop>
                </linearGradient>
            </defs>
                </svg> */}
            </div>

            <div className="col px-5 position-relative d-flex align-items-center bg-gray">
               <div className="row justify-content-center w-100">
                   <div className="col-md-8 col-lg-7 col-xl-6 ">
                        <Image
                            src={prism_logo}
                            alt="Picture of the author"
                            width={60}
                            height={60}
                        />

                        <div className=" mb-4">
                            <span style={{color:'#51CBFF'}}>Welcome Back</span>
                            <h1 className="mb-1" style={{color:'#F9FCFD'}}>Login to your account</h1>
                        </div>
                        <form>
                            <div className="form-group mb-3">
                            <label style={{color:'#F9FCFD'}}>Email</label>
                            <input  name="signup-email" placeholder="Email Address" className="form-control loginInputBox"/>
                            </div>
                            <div className="form-group mb-3">
                            <label style={{color:'#F9FCFD'}}>Password</label>
                            <input  name="signup-password" placeholder="Password" className="form-control loginInputBox"/>
                            </div>
                        
                            <div className="custom-control custom-checkbox">
                            <input type="checkbox" className="custom-control-input" id="signup-agree"/>
                            <label className="custom-control-label text-small" style={{color:'#F9FCFD',marginLeft:'15px'}}>
                                Remember me
                            </label>
                        
                            </div>
                            <div className="form-group">
                            <button className="btn btn-primary loginSubmitBtn" onClick={(e)=>handleLogin(e)}>Login Now</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>      
        </section>
    </>
  )
}
export default Login;
