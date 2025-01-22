<template>
    <div>
         <!-- Hero Section -->
        <header class="bg-info text-white text-center py-5">
            <div class="container">
            <h1>Contact Us</h1>
            <p class="lead">We'd love to hear from you! Get in touch with us below.</p>
            </div>
        </header>

        <!-- Contact Form Section -->
        <section class="py-5">
            <div class="container">
            <div class="row">
                <div class="col-md-6">
                <h2>Get in Touch</h2>
                <p>Fill out the form below, and we'll get back to you as soon as possible.</p>
                <form>
                    <div class="mb-3">
                    <label for="name" class="form-label">Your Name</label>
                    <input type="text" class="form-control" id="name" placeholder="Enter your name">
                    </div>
                    <div class="mb-3">
                    <label for="email" class="form-label">Email Address</label>
                    <input type="email" class="form-control" id="email" placeholder="Enter your email">
                    </div>
                    <div class="mb-3">
                    <label for="message" class="form-label">Message</label>
                    <textarea class="form-control" id="message" rows="5" placeholder="Enter your message"></textarea>
                    </div>
                    <button type="submit" class="btn btn-primary">Send Message</button>
                </form>
                </div>
                <div class="col-md-6">
                <h2>Contact Information</h2>
                <p>Reach out to us directly using the information below:</p>
                <ul class="list-unstyled">
                    <li><i class="fa fa-map-marker"></i> 123 Main Street, City, Country</li>
                    <li><i class="fa fa-phone"></i> +1 234 567 890</li>
                    <li><i class="fa fa-envelope"></i> contact@mywebsite.com</li>
                </ul>
                <h2>Follow Us</h2>
                <a href="#" class="btn btn-outline-primary me-2"><i class="fa fa-facebook"></i></a>
                <a href="#" class="btn btn-outline-primary me-2"><i class="fa fa-twitter"></i></a>
                <a href="#" class="btn btn-outline-primary me-2"><i class="fa fa-instagram"></i></a>
                </div>
            </div>
            </div>
        </section>
    </div>
</template>
<script>
    export default {
        name:'Contact'
    }
</script>