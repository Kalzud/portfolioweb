<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>Laravel</title>

    <!-- Fonts -->
    <link rel="preconnect" href="https://fonts.bunny.net">
    <link href="https://fonts.bunny.net/css?family=figtree:400,600&display=swap" rel="stylesheet" />
    <script src="https://cdn.jsdelivr.net/npm/kute.js@2.1.2/dist/kute.min.js"></script>


    <!-- Styles -->
    <style>
        /* ! tailwindcss v3.2.4 | MIT License | https://tailwindcss.com */
        *,
        ::after,
        ::before {
            box-sizing: border-box;
            border-width: 0;
            border-style: solid;
            border-color: #e5e7eb
        }

        ::after,
        ::before {
            --tw-content: ''
        }

        html {
            line-height: 1.5;
            -webkit-text-size-adjust: 100%;
            -moz-tab-size: 4;
            tab-size: 4;
            font-family: Figtree, sans-serif;
            font-feature-settings: normal
        }

        body {
            margin: 0;
            line-height: inherit
        }

        hr {
            height: 0;
            color: inherit;
            border-top-width: 1px
        }

        abbr:where([title]) {
            -webkit-text-decoration: underline dotted;
            text-decoration: underline dotted
        }

        h1,
        h2,
        h3,
        h4,
        h5,
        h6 {
            font-size: inherit;
            font-weight: inherit
        }

        a {
            color: inherit;
            text-decoration: inherit
        }

        b,
        strong {
            font-weight: bolder
        }

        code,
        kbd,
        pre,
        samp {
            font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
            font-size: 1em
        }

        small {
            font-size: 80%
        }

        sub,
        sup {
            font-size: 75%;
            line-height: 0;
            position: relative;
            vertical-align: baseline
        }

        sub {
            bottom: -.25em
        }

        sup {
            top: -.5em
        }

        table {
            text-indent: 0;
            border-color: inherit;
            border-collapse: collapse
        }

        button,
        input,
        optgroup,
        select,
        textarea {
            font-family: inherit;
            font-size: 100%;
            font-weight: inherit;
            line-height: inherit;
            color: inherit;
            margin: 0;
            padding: 0
        }

        button,
        select {
            text-transform: none
        }

        [type=button],
        [type=reset],
        [type=submit],
        button {
            -webkit-appearance: button;
            background-color: transparent;
            background-image: none
        }

        :-moz-focusring {
            outline: auto
        }

        :-moz-ui-invalid {
            box-shadow: none
        }

        progress {
            vertical-align: baseline
        }

        ::-webkit-inner-spin-button,
        ::-webkit-outer-spin-button {
            height: auto
        }

        [type=search] {
            -webkit-appearance: textfield;
            outline-offset: -2px
        }

        ::-webkit-search-decoration {
            -webkit-appearance: none
        }

        ::-webkit-file-upload-button {
            -webkit-appearance: button;
            font: inherit
        }

        summary {
            display: list-item
        }

        blockquote,
        dd,
        dl,
        figure,
        h1,
        h2,
        h3,
        h4,
        h5,
        h6,
        hr,
        p,
        pre {
            margin: 0
        }

        fieldset {
            margin: 0;
            padding: 0
        }

        legend {
            padding: 0
        }

        menu,
        ol,
        ul {
            list-style: none;
            margin: 0;
            padding: 0
        }

        textarea {
            resize: vertical
        }

        input::placeholder,
        textarea::placeholder {
            opacity: 1;
            color: #9ca3af
        }

        [role=button],
        button {
            cursor: pointer
        }

        :disabled {
            cursor: default
        }

        audio,
        canvas,
        embed,
        iframe,
        img,
        object,
        svg,
        video {
            display: block;
            vertical-align: middle
        }

        img,
        video {
            max-width: 100%;
            height: auto
        }

        [hidden] {
            display: none
        }

        *,
        ::before,
        ::after {
            --tw-border-spacing-x: 0;
            --tw-border-spacing-y: 0;
            --tw-translate-x: 0;
            --tw-translate-y: 0;
            --tw-rotate: 0;
            --tw-skew-x: 0;
            --tw-skew-y: 0;
            --tw-scale-x: 1;
            --tw-scale-y: 1;
            --tw-pan-x: ;
            --tw-pan-y: ;
            --tw-pinch-zoom: ;
            --tw-scroll-snap-strictness: proximity;
            --tw-ordinal: ;
            --tw-slashed-zero: ;
            --tw-numeric-figure: ;
            --tw-numeric-spacing: ;
            --tw-numeric-fraction: ;
            --tw-ring-inset: ;
            --tw-ring-offset-width: 0px;
            --tw-ring-offset-color: #fff;
            --tw-ring-color: rgb(59 130 246 / 0.5);
            --tw-ring-offset-shadow: 0 0 #0000;
            --tw-ring-shadow: 0 0 #0000;
            --tw-shadow: 0 0 #0000;
            --tw-shadow-colored: 0 0 #0000;
            --tw-blur: ;
            --tw-brightness: ;
            --tw-contrast: ;
            --tw-grayscale: ;
            --tw-hue-rotate: ;
            --tw-invert: ;
            --tw-saturate: ;
            --tw-sepia: ;
            --tw-drop-shadow: ;
            --tw-backdrop-blur: ;
            --tw-backdrop-brightness: ;
            --tw-backdrop-contrast: ;
            --tw-backdrop-grayscale: ;
            --tw-backdrop-hue-rotate: ;
            --tw-backdrop-invert: ;
            --tw-backdrop-opacity: ;
            --tw-backdrop-saturate: ;
            --tw-backdrop-sepia:
        }

        ::-webkit-backdrop {
            --tw-border-spacing-x: 0;
            --tw-border-spacing-y: 0;
            --tw-translate-x: 0;
            --tw-translate-y: 0;
            --tw-rotate: 0;
            --tw-skew-x: 0;
            --tw-skew-y: 0;
            --tw-scale-x: 1;
            --tw-scale-y: 1;
            --tw-pan-x: ;
            --tw-pan-y: ;
            --tw-pinch-zoom: ;
            --tw-scroll-snap-strictness: proximity;
            --tw-ordinal: ;
            --tw-slashed-zero: ;
            --tw-numeric-figure: ;
            --tw-numeric-spacing: ;
            --tw-numeric-fraction: ;
            --tw-ring-inset: ;
            --tw-ring-offset-width: 0px;
            --tw-ring-offset-color: #fff;
            --tw-ring-color: rgb(59 130 246 / 0.5);
            --tw-ring-offset-shadow: 0 0 #0000;
            --tw-ring-shadow: 0 0 #0000;
            --tw-shadow: 0 0 #0000;
            --tw-shadow-colored: 0 0 #0000;
            --tw-blur: ;
            --tw-brightness: ;
            --tw-contrast: ;
            --tw-grayscale: ;
            --tw-hue-rotate: ;
            --tw-invert: ;
            --tw-saturate: ;
            --tw-sepia: ;
            --tw-drop-shadow: ;
            --tw-backdrop-blur: ;
            --tw-backdrop-brightness: ;
            --tw-backdrop-contrast: ;
            --tw-backdrop-grayscale: ;
            --tw-backdrop-hue-rotate: ;
            --tw-backdrop-invert: ;
            --tw-backdrop-opacity: ;
            --tw-backdrop-saturate: ;
            --tw-backdrop-sepia:
        }

        ::backdrop {
            --tw-border-spacing-x: 0;
            --tw-border-spacing-y: 0;
            --tw-translate-x: 0;
            --tw-translate-y: 0;
            --tw-rotate: 0;
            --tw-skew-x: 0;
            --tw-skew-y: 0;
            --tw-scale-x: 1;
            --tw-scale-y: 1;
            --tw-pan-x: ;
            --tw-pan-y: ;
            --tw-pinch-zoom: ;
            --tw-scroll-snap-strictness: proximity;
            --tw-ordinal: ;
            --tw-slashed-zero: ;
            --tw-numeric-figure: ;
            --tw-numeric-spacing: ;
            --tw-numeric-fraction: ;
            --tw-ring-inset: ;
            --tw-ring-offset-width: 0px;
            --tw-ring-offset-color: #fff;
            --tw-ring-color: rgb(59 130 246 / 0.5);
            --tw-ring-offset-shadow: 0 0 #0000;
            --tw-ring-shadow: 0 0 #0000;
            --tw-shadow: 0 0 #0000;
            --tw-shadow-colored: 0 0 #0000;
            --tw-blur: ;
            --tw-brightness: ;
            --tw-contrast: ;
            --tw-grayscale: ;
            --tw-hue-rotate: ;
            --tw-invert: ;
            --tw-saturate: ;
            --tw-sepia: ;
            --tw-drop-shadow: ;
            --tw-backdrop-blur: ;
            --tw-backdrop-brightness: ;
            --tw-backdrop-contrast: ;
            --tw-backdrop-grayscale: ;
            --tw-backdrop-hue-rotate: ;
            --tw-backdrop-invert: ;
            --tw-backdrop-opacity: ;
            --tw-backdrop-saturate: ;
            --tw-backdrop-sepia:
        }

        .relative {
            position: relative
        }

        .mx-auto {
            margin-left: auto;
            margin-right: auto
        }

        .mx-6 {
            margin-left: 1.5rem;
            margin-right: 1.5rem
        }

        .ml-4 {
            margin-left: 1rem
        }

        .mt-16 {
            margin-top: 4rem
        }

        .mt-6 {
            margin-top: 1.5rem
        }

        .mt-4 {
            margin-top: 1rem
        }

        .-mt-px {
            margin-top: -1px
        }

        .mr-1 {
            margin-right: 0.25rem
        }

        .flex {
            display: flex
        }

        .inline-flex {
            display: inline-flex
        }

        .grid {
            display: grid
        }

        .h-16 {
            height: 4rem
        }

        .h-7 {
            height: 1.75rem
        }

        .h-6 {
            height: 1.5rem
        }

        .h-5 {
            height: 1.25rem
        }

        .min-h-screen {
            min-height: 100vh
        }

        .w-auto {
            width: auto
        }

        .w-16 {
            width: 4rem
        }

        .w-7 {
            width: 1.75rem
        }

        .w-6 {
            width: 1.5rem
        }

        .w-5 {
            width: 1.25rem
        }

        .max-w-7xl {
            max-width: 80rem
        }

        .shrink-0 {
            flex-shrink: 0
        }

        .scale-100 {
            --tw-scale-x: 1;
            --tw-scale-y: 1;
            transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))
        }

        .grid-cols-1 {
            grid-template-columns: repeat(1, minmax(0, 1fr))
        }

        .items-center {
            align-items: center
        }

        .justify-center {
            justify-content: center
        }

        .gap-6 {
            gap: 1.5rem
        }

        .gap-4 {
            gap: 1rem
        }

        .self-center {
            align-self: center
        }

        .rounded-lg {
            border-radius: 0.5rem
        }

        .rounded-full {
            border-radius: 9999px
        }

        .bg-gray-100 {
            --tw-bg-opacity: 1;
            background-color: rgb(243 244 246 / var(--tw-bg-opacity))
        }

        .bg-white {
            --tw-bg-opacity: 1;
            background-color: rgb(255 255 255 / var(--tw-bg-opacity))
        }

        .bg-red-50 {
            --tw-bg-opacity: 1;
            background-color: rgb(254 242 242 / var(--tw-bg-opacity))
        }

        .bg-dots-darker {
            background-image: url("data:image/svg+xml,%3Csvg width='30' height='30' viewBox='0 0 30 30' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1.22676 0C1.91374 0 2.45351 0.539773 2.45351 1.22676C2.45351 1.91374 1.91374 2.45351 1.22676 2.45351C0.539773 2.45351 0 1.91374 0 1.22676C0 0.539773 0.539773 0 1.22676 0Z' fill='rgba(0,0,0,0.07)'/%3E%3C/svg%3E")
        }

        .from-gray-700\/50 {
            --tw-gradient-from: rgb(55 65 81 / 0.5);
            --tw-gradient-to: rgb(55 65 81 / 0);
            --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to)
        }

        .via-transparent {
            --tw-gradient-to: rgb(0 0 0 / 0);
            --tw-gradient-stops: var(--tw-gradient-from), transparent, var(--tw-gradient-to)
        }

        .bg-center {
            background-position: center
        }

        .stroke-red-500 {
            stroke: #ef4444
        }

        .stroke-gray-400 {
            stroke: #9ca3af
        }

        .p-6 {
            padding: 1.5rem
        }

        .px-6 {
            padding-left: 1.5rem;
            padding-right: 1.5rem
        }

        .text-center {
            text-align: center
        }

        .text-right {
            text-align: right
        }

        .text-xl {
            font-size: 1.25rem;
            line-height: 1.75rem
        }

        .text-sm {
            font-size: 0.875rem;
            line-height: 1.25rem
        }

        .font-semibold {
            font-weight: 600
        }

        .leading-relaxed {
            line-height: 1.625
        }

        .text-gray-600 {
            --tw-text-opacity: 1;
            color: rgb(75 85 99 / var(--tw-text-opacity))
        }

        .text-gray-900 {
            --tw-text-opacity: 1;
            color: rgb(17 24 39 / var(--tw-text-opacity))
        }

        .text-gray-500 {
            --tw-text-opacity: 1;
            color: rgb(107 114 128 / var(--tw-text-opacity))
        }

        .underline {
            -webkit-text-decoration-line: underline;
            text-decoration-line: underline
        }

        .antialiased {
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale
        }

        .shadow-2xl {
            --tw-shadow: 0 25px 50px -12px rgb(0 0 0 / 0.25);
            --tw-shadow-colored: 0 25px 50px -12px var(--tw-shadow-color);
            box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)
        }

        .shadow-gray-500\/20 {
            --tw-shadow-color: rgb(107 114 128 / 0.2);
            --tw-shadow: var(--tw-shadow-colored)
        }

        .transition-all {
            transition-property: all;
            transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
            transition-duration: 150ms
        }

        .selection\:bg-red-500 *::selection {
            --tw-bg-opacity: 1;
            background-color: rgb(239 68 68 / var(--tw-bg-opacity))
        }

        .selection\:text-white *::selection {
            --tw-text-opacity: 1;
            color: rgb(255 255 255 / var(--tw-text-opacity))
        }

        .selection\:bg-red-500::selection {
            --tw-bg-opacity: 1;
            background-color: rgb(239 68 68 / var(--tw-bg-opacity))
        }

        .selection\:text-white::selection {
            --tw-text-opacity: 1;
            color: rgb(255 255 255 / var(--tw-text-opacity))
        }

        .hover\:text-gray-900:hover {
            --tw-text-opacity: 1;
            color: rgb(17 24 39 / var(--tw-text-opacity))
        }

        .hover\:text-gray-700:hover {
            --tw-text-opacity: 1;
            color: rgb(55 65 81 / var(--tw-text-opacity))
        }

        .focus\:rounded-sm:focus {
            border-radius: 0.125rem
        }

        .focus\:outline:focus {
            outline-style: solid
        }

        .focus\:outline-2:focus {
            outline-width: 2px
        }

        .focus\:outline-red-500:focus {
            outline-color: #ef4444
        }

        .group:hover .group-hover\:stroke-gray-600 {
            stroke: #4b5563
        }

        .z-10 {
            z-index: 10
        }

        @media (prefers-reduced-motion: no-preference) {
            .motion-safe\:hover\:scale-\[1\.01\]:hover {
                --tw-scale-x: 1.01;
                --tw-scale-y: 1.01;
                transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))
            }
        }

        @media (prefers-color-scheme: dark) {
            .dark\:bg-gray-900 {
                --tw-bg-opacity: 1;
                background-color: rgb(17 24 39 / var(--tw-bg-opacity))
            }

            .dark\:bg-gray-800\/50 {
                background-color: rgb(31 41 55 / 0.5)
            }

            .dark\:bg-red-800\/20 {
                background-color: rgb(153 27 27 / 0.2)
            }

            .dark\:bg-dots-lighter {
                background-image: url("data:image/svg+xml,%3Csvg width='30' height='30' viewBox='0 0 30 30' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1.22676 0C1.91374 0 2.45351 0.539773 2.45351 1.22676C2.45351 1.91374 1.91374 2.45351 1.22676 2.45351C0.539773 2.45351 0 1.91374 0 1.22676C0 0.539773 0.539773 0 1.22676 0Z' fill='rgba(255,255,255,0.07)'/%3E%3C/svg%3E")
            }

            .dark\:bg-gradient-to-bl {
                background-image: linear-gradient(to bottom left, var(--tw-gradient-stops))
            }

            .dark\:stroke-gray-600 {
                stroke: #4b5563
            }

            .dark\:text-gray-400 {
                --tw-text-opacity: 1;
                color: rgb(156 163 175 / var(--tw-text-opacity))
            }

            .dark\:text-white {
                --tw-text-opacity: 1;
                color: rgb(255 255 255 / var(--tw-text-opacity))
            }

            .dark\:shadow-none {
                --tw-shadow: 0 0 #0000;
                --tw-shadow-colored: 0 0 #0000;
                box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)
            }

            .dark\:ring-1 {
                --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
                --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color);
                box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000)
            }

            .dark\:ring-inset {
                --tw-ring-inset: inset
            }

            .dark\:ring-white\/5 {
                --tw-ring-color: rgb(255 255 255 / 0.05)
            }

            .dark\:hover\:text-white:hover {
                --tw-text-opacity: 1;
                color: rgb(255 255 255 / var(--tw-text-opacity))
            }

            .group:hover .dark\:group-hover\:stroke-gray-400 {
                stroke: #9ca3af
            }
        }

        @media (min-width: 640px) {
            .sm\:fixed {
                position: fixed
            }

            .sm\:top-0 {
                top: 0px
            }

            .sm\:right-0 {
                right: 0px
            }

            .sm\:ml-0 {
                margin-left: 0px
            }

            .sm\:flex {
                display: flex
            }

            .sm\:items-center {
                align-items: center
            }

            .sm\:justify-center {
                justify-content: center
            }

            .sm\:justify-between {
                justify-content: space-between
            }

            .sm\:text-left {
                text-align: left
            }

            .sm\:text-right {
                text-align: right
            }
        }

        @media (min-width: 768px) {
            .md\:grid-cols-2 {
                grid-template-columns: repeat(2, minmax(0, 1fr))
            }
        }

        @media (min-width: 1024px) {
            .lg\:gap-8 {
                gap: 2rem
            }

            .lg\:p-8 {
                padding: 2rem
            }
        }
    </style>

    <!-- Scripts -->
    @viteReactRefresh
    @vite(['resources/sass/app.scss', 'resources/js/app.js'])
    <script src="https://kit.fontawesome.com/346c4253c2.js" crossorigin="anonymous"></script>

    <link rel="stylesheet" href="{{ asset('fontawesome-free-6.4.2-web\css\all.min.css') }}">

</head>

<body class="antialiased">
    {{-- =========================================================== start of top div =================================================================       --}}
    <section class="Turquoise">
        <div class="row topRow">
            <div class="card" style="border: none; background-color: transparent">
                <div class="card-body">
                    <div class="row">
                        <div class="col-8">
                            <div class="card aboutMeCard">
                                <div class="card-body">
                                    <div class="card-title aboutMeHeading" style="font-size: xx-large;">About Me 😊
                                    </div>
                                    <div class="card-text">
                                        Hello, I'm Emmanuel Okala Uduma 🚀, a passionate and
                                        self-motivated software engineering student based in the United Kingdom 🇬🇧.
                                        My journey into the world of software development began about three years ago,
                                        and it has been a thrilling adventure ever since.
                                    </div>
                                    <div class="card-title">💡 My Story:</div>
                                    <div class="card-text">
                                        The spark that ignited my passion for software development came when
                                        I was tasked with building my first social media web application as
                                        a school project. What started as a simple assignment soon became an
                                        all-consuming obsession. The thrill of creating something from scratch,
                                        with the power to impact the real world, was simply irresistible.
                                    </div>
                                    <div class="card-title">🌟 My Journey So Far:</div>
                                    <div class="card-text">
                                        Since those early days, I've dabbled in a wide array of software development
                                        projects,
                                        ranging from Android applications to cross-platform solutions, web applications,
                                        desktop games, and more. With each project, my confidence grew,
                                        and I found myself eagerly taking on collaborative freelance work,
                                        not just for the paycheck, but because I'm genuinely passionate
                                        about crafting software solutions.
                                    </div>
                                </div><!--card body end -->
                            </div><!--card end -->
                        </div>
                        <div class="col-4 portImg">
                            <img src="{{ asset('imgs/pp2.jpg') }}" alt="Portfolio_Image">
                        </div>
                    </div>
                </div><!-- end of card body -->
            </div><!-- end of card -->
        </div><!--end of row div -->
    </section>
    {{-- ================================================================= End of top div ========================================================================================================= --}}

    {{-- ========================================================== Start of second row ============================================================================ --}}
    <section class="Turquoise">
        <div class="row secondrow">
            <div class="card aboutmepart2" style="border: none; background-color: transparent">
                <div class="card-body">
                    <div class="card">
                        <card-body>
                            <div class="card-title">🚀 My Mission:</div>
                            <div class="card-text">
                                My journey in the world of software development is far from over;
                                in fact, it's just beginning. I'm committed to exploring every
                                nook and cranny of this field, pushing the boundaries of what's possible,
                                and maximizing my potential wherever it leads me..
                            </div>
                        </card-body>
                    </div>
                    {{-- ======================================== --}}
                    <div class="right">
                        <div class="card">
                            <card-body>
                                <div class="card-title">🔍 What Sets Me Apart:</div>
                                <div class="card-text">
                                    One of the reasons I excel in projects and earn opportunities is my
                                    unwavering commitment to detail and efficiency.
                                    I thrive on optimizing budgets and time, ensuring that the software
                                    I create is not only easily manageable but also continuously improvable,
                                    because the world of software is ever-evolving.
                                </div>
                            </card-body>
                        </div>
                    </div>
                    {{-- ======================================== --}}
                    <div class="card">
                        <card-body>
                            <div class="card-title">🤝 My Commitment:</div>
                            <div class="card-text">
                                I always strive to deliver more value than expected.
                                Whether I'm working on a project for a client or as part of a team,
                                my goal is to ensure that the end result is nothing short of exceptional.
                                I believe in leaving clients and companies not just satisfied but genuinely impressed.
                            </div>
                        </card-body>
                    </div>
                    {{-- ======================================== --}}
                </div>
            </div>
        </div>
        <div id="blob"></div>
    </section>
    {{-- =============================================================== end of second row ======================================= --}}

    <div class="spacer layer1"></div>

    {{-- ============================================= start of third row ==================================================== --}}
    <section class="SkyBlue">
        <div class="row thirdrow">
            <div class="card main" style="min-width: 100%; border: none; background-color: transparent">
                <div class="card-body">
                    <div class="row">
                        <h1>Best projects 😊</h1>
                    </div>
                    <div class="row">
                        <div class="col-6">
                            <div class="card">
                                <card-body>
                                    <div class="card-title">SecondNotes: Embracing Flutter and Dart 🚀</div>
                                    <div class="card-text">
                                        My journey into the world of software development led me to my first
                                        cross-platform project, where I embarked on a captivating exploration of the
                                        Flutter framework and the Dart programming language. Here, I delved deep into
                                        the intricacies of software development, learning to separate providers,
                                        services, and databases from the user interface itself.

                                        One exciting aspect of this project was my introduction to the concept of state
                                        management using the BLoC pattern. This led to improved testing, enhanced
                                        reusability, and a seamless approach to scaling my project. As I fine-tuned my
                                        skills, I also deepened my understanding of CRUD (Create, Read, Update, Delete)
                                        operations in relation to streams. It was a milestone in my learning journey.
                                    </div>
                                </card-body>
                            </div>
                        </div>
                        {{-- ========================= --}}
                        <div class="col-6">
                            <div class="card">
                                <card-body>
                                    <div class="card-title">ScreenTalker: A Fusion of Imagination and Technology 📽️
                                    </div>
                                    <div class="card-text">
                                        ScreenTalker stands as one of my most captivating projects, driven by my desire
                                        to let my imagination soar. This Android application was my canvas, where I
                                        merged the best features of Instagram, YouTube, and Netflix. The result? A
                                        movie-viewing platform that not only facilitates side comments but also fosters
                                        interactive movie-watching communities.

                                        But ScreenTalker went even further. It introduced text messaging, calls, and
                                        video calls—all within the same application. The project allowed me to dive
                                        headfirst into Firebase, exploring Firestore, storage, authentication, and more.
                                        I fell in love with Firebase's flexibility and the myriad of plugins that
                                        enriched my project's functionality.
                                    </div>
                                </card-body>
                            </div>
                        </div>
                    </div>
                    {{-- ============================================================= --}}
                    <div class="row">
                        <div class="col-6">
                            <div class="card">
                                <card-body>
                                    <div class="card-title">Onboarding: Bridging Academia and Real-World Experience 📚
                                    </div>
                                    <div class="card-text">
                                        My first real-world client interaction came through the Onboarding project, part
                                        of a school hackathon. We were tasked with developing an onboarding assistance
                                        web application for an actual company. This marked my initiation into the Scrum
                                        framework, complete with iterations and weekly demos.

                                        Through this experience, I gained a deeper understanding of the software
                                        development cycle, mastering concepts like time management and budget control.
                                        It was also an opportunity to delve into PHP, as I took sole responsibility for
                                        the project's backend. The result? A minimum viable project that empowered the
                                        company to build upon our foundation.
                                    </div>
                                </card-body>
                            </div>
                        </div>
                        {{-- ========================= --}}
                        <div class="col-6">
                            <div class="card">
                                <card-body>
                                    <div class="card-title">SocialMediaWeb: Where My Coding Journey Truly Began 🌐</div>
                                    <div class="card-text">
                                        SocialMediaWeb holds a special place in my heart as the project that sparked my
                                        fascination with software development. It was here that I marveled at the magic
                                        of turning lines of code into a functional social media web application,
                                        reminiscent of those I had used growing up.

                                        What started as a simple project evolved into a feature-rich application with
                                        friend requests, likes, comments, and more. I delved into JavaScript,
                                        implementing live searches, requests, and interactive maps to locate friends.
                                        Security became a paramount concern, leading me to explore PHP's security
                                        measures extensively.
                                    </div>
                                </card-body>
                            </div>
                        </div>
                    </div>
                    {{-- ============================================================= --}}
                    <div class="row">
                        <div class="col-6">
                            <div class="card">
                                <card-body>
                                    <div class="card-title">COBOL2XML: Real-World Software Enhancement 💼</div>
                                    <div class="card-text">
                                        COBOL2XML introduced me to real-world software development scenarios where I had
                                        to enhance an existing COBOL program. It was a unique opportunity to learn and
                                        understand the language, enabling me to add valuable features to improve its
                                        capabilities.
                                    </div>
                                </card-body>
                            </div>
                        </div>
                        {{-- ========================= --}}
                        <div class="col-6">
                            <div class="card">
                                <card-body>
                                    <div class="card-title">JavaSmallGame: Crafting Code and Games with Java 🎮</div>
                                    <div class="card-text">
                                        JavaSmallGame marked my first extensive Java project and my foray into game
                                        development. I immersed myself in various design patterns, implementing concepts
                                        like Singleton, Factory, and Strategy. This project emphasized the importance of
                                        writing reusable code that could be easily improved upon.

                                        Beyond the game itself, it was about honing my skills in writing effective,
                                        clean, and maintainable code—a valuable lesson that transcended the boundaries
                                        of the gaming world.

                                        My journey in software development continues to be a thrilling adventure, and I
                                        look forward to each new project, each line of code, and each opportunity to
                                        innovate. 🌟
                                    </div>
                                </card-body>
                            </div>
                        </div>
                    </div>
                    {{-- ============================================================= --}}
                </div> <!-- end of card body -->
            </div> <!-- end of card --->
        </div>
    </section>
    {{-- ===================================================== end of third row  ======================================================== --}}

    <div class="spacer layer2"></div>

    {{-- ============================================== start of fourth row ===================================================================== --}}
    <section class="LightSteelBlue">
        <div class="row fourthrow">
            <div class="card main" style="border: none; background-color: transparent">
                <div class="card-body">
                    <div class="row">
                        <h1>Some services I could offer you 🛠️</h1>
                    </div>
                    <div class="row">
                        <div class="card">
                            <div class="card-body">
                                <div class="card-text">Mobile App Development</div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="card">
                            <div class="card-body">
                                <div class="card-text">Web Development</div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="card">
                            <div class="card-body">
                                <div class="card-text">Firebase Integration</div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="card">
                            <div class="card-body">
                                <div class="card-text">Software Enhancement and Maintenance</div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="card">
                            <div class="card-body">
                                <div class="card-text">Game Development</div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="card">
                            <div class="card-body">
                                <div class="card-text">State Management and BLoC Pattern</div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="card">
                            <div class="card-body">
                                <div class="card-text">Database Management</div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="card">
                            <div class="card-body">
                                <div class="card-text">UI/UX Design</div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="card">
                            <div class="card-body">
                                <div class="card-text">Scrum and Agile Methodologies</div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="card">
                            <div class="card-body">
                                <div class="card-text">Cross-Platform Development</div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="card">
                            <div class="card-body">
                                <div class="card-text">Code Optimization</div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="card">
                            <div class="card-body">
                                <div class="card-text">Consultation and Collaboration</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    {{-- ================================================== end of fourth row ===================================================================================== --}}

    <div class="spacer layer3"></div>

    {{-- =============================================== start of fifth row =================================================================== --}}
    <section class="Lavender">
        <div class="row fifthrow">
            <div class="card main" style="border: none; background-color: transparent">
                <div class="card-body">
                    <div class="row">
                        <h1>My testimonials 📣</h1>
                    </div>
                </div>
            </div>
        </div>
    </section>
    {{-- ====================================================== end of fith row ================================================================================ --}}

    <div class="spacer layer4"></div>

    {{-- =============================================== start of sixth row =================================================================== --}}
    <section class="LavenderBlush">
        <div class="row sixthrow">
            <div class="card main" style="border: none; background-color: transparent">
                <div class="card-body">
                    <div class="row">
                        <h1>My Soft skills 🧠</h1>
                    </div>
                </div>
            </div>
        </div>
    </section>
    {{-- ====================================================== end of sixith row ================================================================================ --}}

    <div class="spacer layer5"></div>

    {{-- =============================================== start of seventh row =================================================================== --}}
    <section class="MistyRose">
        <div class="row seventhrow">
            <div class="card main" style="border: none; background-color: transparent">
                <div class="card-body">
                    <div class="row">
                        <h1>My Hobbies 🎨</h1>
                    </div>
                </div>
            </div>
        </div>
    </section>
    {{-- ====================================================== end of seventh row ================================================================================ --}}

    <div class="spacer layer6"></div>

    {{-- =============================================== start of eigth row =================================================================== --}}
    <section class="LightCoral">
        <div class="row eigthrow">
            <div class="card main" style="border: none; background-color: transparent">
                <div class="card-body">
                    <div class="row">
                        <h1>My Contacts 📞</h1>
                    </div>
                </div>
            </div>
        </div>
    </section>
    {{-- ====================================================== end of eigth row ================================================================================ --}}
</body>

</html>




























































{{-- <div class="card-title">👀 Explore My Portfolio:</div>
                            <div class="card-text">
                                Feel free to explore the rest of my portfolio, where you'll find a showcase
                                of my work and the projects that define my journey in software development.
                                I hope you enjoy the journey as much as I have enjoyed living it.
                            </div>
                            <div class="card-title"></div>
                            <div class="card-text">
                                Thank you for taking the time to get to know me better,
                                and I look forward to connecting with you and exploring
                                the exciting possibilities of technology together! 🚀🌟
                            </div> --}}
