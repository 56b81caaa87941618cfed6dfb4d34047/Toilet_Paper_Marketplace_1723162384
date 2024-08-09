Vue.component("dark_footer_component_1723162386", {
    template: `
<div class="min-h-screen flex items-center justify-center bg-amber-900">
    <div class="bg-amber-800 p-8 rounded-lg shadow-lg max-w-md w-full">
        <h2 class="text-2xl font-bold mb-6 text-amber-100">Purchase Toilet Paper</h2>
        <form @submit.prevent="submitForm" class="space-y-4">
            <div>
                <label for="brand" class="block text-amber-200 mb-2">Brand</label>
                <select id="brand" v-model="brand" class="w-full p-2 rounded bg-amber-700 text-amber-100 border border-amber-600">
                    <option value="">Select a brand</option>
                    <option value="soft-n-strong">Soft-n-Strong</option>
                    <option value="eco-friendly">Eco-Friendly</option>
                    <option value="luxury-plush">Luxury Plush</option>
                </select>
            </div>
            
            <div>
                <label for="quantity" class="block text-amber-200 mb-2">Quantity (Rolls)</label>
                <input type="number" id="quantity" v-model="quantity" min="1" class="w-full p-2 rounded bg-amber-700 text-amber-100 border border-amber-600">
            </div>
            
            <div>
                <label for="ply" class="block text-amber-200 mb-2">Ply</label>
                <div class="flex space-x-4">
                    <label class="flex items-center text-amber-200">
                        <input type="radio" v-model="ply" value="1" class="mr-2">
                        1-Ply
                    </label>
                    <label class="flex items-center text-amber-200">
                        <input type="radio" v-model="ply" value="2" class="mr-2">
                        2-Ply
                    </label>
                    <label class="flex items-center text-amber-200">
                        <input type="radio" v-model="ply" value="3" class="mr-2">
                        3-Ply
                    </label>
                </div>
            </div>
            
            <div>
                <label for="scented" class="flex items-center text-amber-200">
                    <input type="checkbox" id="scented" v-model="scented" class="mr-2">
                    Scented
                </label>
            </div>
            
            <div>
                <label for="address" class="block text-amber-200 mb-2">Delivery Address</label>
                <textarea id="address" v-model="address" rows="3" class="w-full p-2 rounded bg-amber-700 text-amber-100 border border-amber-600"></textarea>
            </div>
            
            <div>
                <button type="submit" class="w-full bg-amber-600 text-amber-100 p-2 rounded hover:bg-amber-500 transition duration-300">
                    Purchase
                </button>
            </div>
        </form>
    </div>
</div>
    `,
    data() {
        return {
            brand: '',
            quantity: 1,
            ply: '2',
            scented: false,
            address: ''
        };
    },
    methods: {
        submitForm() {
            // Handle form submission
            console.log('Form submitted', {
                brand: this.brand,
                quantity: this.quantity,
                ply: this.ply,
                scented: this.scented,
                address: this.address
            });
            // Here you would typically send this data to a server
        }
    }
});