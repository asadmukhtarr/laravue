<template>
    <div>
        <!-- Hero Section -->
        <header class="bg-info text-white text-center py-5">
            <div class="container">
            <h1>Welcome to My Website</h1>
            <p class="lead">A great place to showcase your services and products</p>
            <a href="#features" class="btn btn-light btn-lg mt-3">Learn More</a>
            </div>
        </header>

        <!-- Features Section -->
        <section id="features" class="py-5">
            <div class="container">
            <div class="row text-center">
                <div class="col-md-4">
                <i class="fa fa-cogs fa-3x text-primary mb-3"></i>
                <h3>Feature One</h3>
                <p>Details about the first feature of your website or service.</p>
                </div>
                <div class="col-md-4">
                <i class="fa fa-star fa-3x text-primary mb-3"></i>
                <h3>Feature Two</h3>
                <p>Details about the second feature of your website or service.</p>
                </div>
                <div class="col-md-4">
                <i class="fa fa-heart fa-3x text-primary mb-3"></i>
                <h3>Feature Three</h3>
                <p>Details about the third feature of your website or service.</p>
                </div>
            </div>
            </div>
        </section>
    </div>
</template>
<script>
    export default {
        name:'Home'
    }
</script>
