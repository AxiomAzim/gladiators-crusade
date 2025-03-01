<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Gladiator's Crusade - Home</title>
    <link rel="stylesheet" href="styles.css">
    <script defer src="script.js"></script>
</head>
<body>
    <header>
        <h1>Gladiator's Crusade</h1>
        <nav>
            <ul>
                <li><a href="index.html">Home</a></li>
                <li><a href="itinerary.html">Itinerary</a></li>
                <li><a href="budget.html">Cost/Budget</a></li>
                <li><a href="packing.html">Packing List</a></li>
                <li><a href="virtual.html">Virtual Tour</a></li>
            </ul>
        </nav>
    </header>
    
    <main>
        <section class="intro">
            <h2>Welcome to Gladiator's Crusade</h2>
            <p>Explore the wonders of Rome, Italy with an unforgettable journey through history. Visit the Colosseum, marvel at the Pantheon, and experience the artistic splendor of the Sistine Chapel. Book your adventure today!</p>
            <button id="learn-more">Learn More</button>
        </section>

        <section class="destination-highlights">
            <h2>Must-See Attractions</h2>
            <div class="attractions">
                <div class="attraction">
                    <img src="images/colosseum.jpg" alt="Colosseum">
                    <p>The iconic Colosseum, a symbol of Rome's ancient glory.</p>
                </div>
                <div class="attraction">
                    <img src="images/pantheon.jpg" alt="Pantheon">
                    <p>The Pantheon, an architectural masterpiece standing for centuries.</p>
                </div>
                <div class="attraction">
                    <img src="images/sistine_chapel.jpg" alt="Sistine Chapel">
                    <p>The breathtaking Sistine Chapel, home to Michelangelo’s famous frescoes.</p>
                </div>
            </div>
        </section>

        <section class="contact">
            <h2>Contact Us</h2>
            <p>Email: info@gladiatorscrusade.com</p>
            <p>Phone: (555) 123-4567</p>
            <form id="contact-form">
                <label for="name">Name:</label>
                <input type="text" id="name" name="name" required>
                <label for="message">Message:</label>
                <textarea id="message" name="message" required></textarea>
                <button type="submit">Send</button>
            </form>
            <p id="form-response" class="hidden">Thank you for reaching out!</p>
        </section>
    </main>
    
    <footer>
        <p>&copy; 2025 Gladiator's Crusade. All rights reserved.</p>
    </footer>
</body>
</html>
