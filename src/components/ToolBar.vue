<template>
    <div class="header">
        <router-link to="/charts" class="routerlink">Charts</router-link> |
        <router-link to="/musics" class="routerlink">Musics</router-link> |
        <router-link to="/artists" class="routerlink">Artists</router-link>
    </div>
</template>

<script>
export default {

}
</script>


<style scoped>
.header {
    color: white;
    background-color: #42b883;
    display: flex;
    padding: 8px 10% 8px 80%;
}
.header .router-link-exact-active{
    color: #35495e;
}
.header a {
    color: white;
}

.routerlink {
    margin: 0 10% 0 10%;
}
</style>