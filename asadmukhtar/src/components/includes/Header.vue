<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-info">
        <div class="container-fluid">
            <a class="navbar-brand" href="#"> <i class="fa fa-code"></i> Vue Class</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#"> <i class="fa fa-home"></i> Home</a>
                </li>
                <li class="nav-item">
                <a class="nav-link" href="#"> <i class="fa fa-info-circle"></i> About</a>
                </li>
                <li class="nav-item">
                <a class="nav-link" href="#"> <i class="fa fa-users"></i> Users</a>
                </li>
                <li class="nav-item">
                <a class="nav-link" href="#"> <i class="fa fa-users"></i> Contact</a>
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
