<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-info">
        <div class="container-fluid">
            <router-link class="navbar-brand" to="/"> <i class="fa fa-code"></i> Vue Class</router-link>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                <li class="nav-item">
                <router-link class="nav-link active" aria-current="page" to="/"> <i class="fa fa-home"></i> Home</router-link>
                </li>
                <li class="nav-item">
                <router-link class="nav-link" to="/about"> <i class="fa fa-info-circle"></i> About</router-link>
                </li>
                <li class="nav-item">
                <router-link class="nav-link" to="/users"> <i class="fa fa-users"></i> Users</router-link>
                </li>
                <li class="nav-item">
                <router-link class="nav-link" to="/contact"> <i class="fa fa-users"></i> Contact</router-link>
                </li>
              
            </ul>
            </div>
        </div>
    </nav>   
</template>
<script>
    export default {
        name:'Header'
    }
</script>
