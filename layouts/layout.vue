<template>
    <div>
        <Head>
            <Title>포트폴리오</Title>
            <Meta name="discription" content="홍길동의 포트폴리오..."/>
            <Link rel="shortcut icon" href="/path/to/favicon.ico" /> <!-- 앞글자는 대문자로  -->
        </Head>
        <header>
            <NuxtLink to="/">HOME</NuxtLink>
            <NuxtLink to="/about">ABOUT</NuxtLink>
            <NuxtLink to="/work">WORK</NuxtLink>
        </header>
        <slot /> <!--리액트의 children과 동일-->
        <footer></footer>
    </div>
</template>