Vue.component("purple_background_cta_component_1723162386", {
    template: `
    <section id="cta-section-container" class="bg-brown-100 min-h-screen flex items-center justify-center">
        <div id="section-container" class="max-w-2xl mx-auto p-8 bg-brown-200 rounded-xl shadow-lg">
            <h2 class="text-3xl font-bold text-brown-800 mb-6 text-center">Toilet Paper Purchase Form</h2>
            <form @submit.prevent="submitForm" class="space-y-6">
                <div>
                    <label for="name" class="block text-brown-700 font-medium mb-2">Name</label>
                    <input type="text" id="name" v-model="form.name" required class="w-full px-4 py-2 rounded-lg border border-brown-300 focus:outline-none focus:ring-2 focus:ring-brown-500">
                </div>
                <div>
                    <label for="email" class="block text-brown-700 font-medium mb-2">Email</label>
                    <input type="email" id="email" v-model="form.email" required class="w-full px-4 py-2 rounded-lg border border-brown-300 focus:outline-none focus:ring-2 focus:ring-brown-500">
                </div>
                <div>
                    <label for="quantity" class="block text-brown-700 font-medium mb-2">Quantity (rolls)</label>
                    <input type="number" id="quantity" v-model="form.quantity" required min="1" class="w-full px-4 py-2 rounded-lg border border-brown-300 focus:outline-none focus:ring-2 focus:ring-brown-500">
                </div>
                <div>
                    <label for="type" class="block text-brown-700 font-medium mb-2">Type</label>
                    <select id="type" v-model="form.type" required class="w-full px-4 py-2 rounded-lg border border-brown-300 focus:outline-none focus:ring-2 focus:ring-brown-500">
                        <option value="1-ply">1-ply</option>
                        <option value="2-ply">2-ply</option>
                        <option value="3-ply">3-ply</option>
                        <option value="4-ply">4-ply</option>
                    </select>
                </div>
                <div>
                    <label for="address" class="block text-brown-700 font-medium mb-2">Delivery Address</label>
                    <textarea id="address" v-model="form.address" required rows="3" class="w-full px-4 py-2 rounded-lg border border-brown-300 focus:outline-none focus:ring-2 focus:ring-brown-500"></textarea>
                </div>
                <div>
                    <button type="submit" class="w-full bg-brown-600 text-white font-bold py-3 px-4 rounded-lg hover:bg-brown-700 transition duration-300">
                        Purchase Toilet Paper
                    </button>
                </div>
            </form>
        </div>
    </section>
    `,
    data() {
        return {
            form: {
                name: '',
                email: '',
                quantity: 1,
                type: '2-ply',
                address: ''
            }
        };
    },
    methods: {
        submitForm() {
            // Handle form submission here
            console.log('Form submitted:', this.form);
            // You would typically send this data to a server
            alert('Thank you for your order!');
            // Reset form after submission
            this.form = {
                name: '',
                email: '',
                quantity: 1,
                type: '2-ply',
                address: ''
            };
        }
    }
});