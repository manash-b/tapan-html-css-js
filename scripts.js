document.addEventListener('DOMContentLoaded', () => {
    const addItemBtn = document.getElementById('addItemBtn');
    const wizard = document.getElementById('wizard');
    const closeWizard = document.getElementById('closeWizard');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const progressBarFill = document.getElementById('progressBarFill');
    let currentStep = 0;

    // Show the wizard
    addItemBtn.addEventListener('click', () => {
        wizard.classList.add('show');
        loadStep(currentStep);
    });

    // Close the wizard
    closeWizard.addEventListener('click', () => {
        wizard.classList.remove('show');
    });

    // Load step content
    function loadStep(step) {
        const stepsContent = [
            '<div><h4>Step 1: Basic Information</h4><input type="text" id="productName" placeholder="Product Name"><input type="text" id="productDescription" placeholder="Product Description"><input type="text" id="category" placeholder="Category"><input type="text" id="brand" placeholder="Brand"></div>',
            '<div><h4>Step 2: Product Specifications</h4><input type="text" id="model" placeholder="Model Number/Name"><input type="text" id="color" placeholder="Color"><input type="text" id="size" placeholder="Size/Dimensions"><input type="text" id="weight" placeholder="Weight"><input type="text" id="material" placeholder="Material"></div>',
            '<div><h4>Step 3: Pricing and Inventory</h4><input type="text" id="sellingPrice" placeholder="Selling Price"><input type="text" id="mrp" placeholder="MRP"><input type="text" id="discounts" placeholder="Discounts"><input type="text" id="stockQuantity" placeholder="Stock Quantity"><input type="text" id="sku" placeholder="SKU"></div>',
            '<div><h4>Step 4: Shipping Information</h4><input type="text" id="shippingWeight" placeholder="Weight for Shipping"><input type="text" id="shippingDimensions" placeholder="Dimensions for Shipping"><input type="text" id="deliveryOptions" placeholder="Delivery Options"></div>'
        ];
        document.getElementById('wizardContent').innerHTML = stepsContent[step];
        updateProgressBar(step);
    }

    // Update progress bar
    function updateProgressBar(step) {
        const percentage = ((step + 1) / 4) * 100; // 4 steps total
        progressBarFill.style.width = `${percentage}%`;
    }

    // Navigation buttons
    prevBtn.addEventListener('click', () => {
        if (currentStep > 0) {
            currentStep--;
            loadStep(currentStep);
        }
    });

    nextBtn.addEventListener('click', () => {
        if (currentStep < 3) { // 4 steps total
            currentStep++;
            loadStep(currentStep);
        } else {
            // Final step action (e.g., log all values)
            logValues();
            wizard.classList.remove('show');
        }
    });

    // Log all values
    function logValues() {
        const values = {
            productName: document.getElementById('productName').value,
            productDescription: document.getElementById('productDescription').value,
            category: document.getElementById('category').value,
            brand: document.getElementById('brand').value,
            model: document.getElementById('model').value,
            color: document.getElementById('color').value,
            size: document.getElementById('size').value,
            weight: document.getElementById('weight').value,
            material: document.getElementById('material').value,
            sellingPrice: document.getElementById('sellingPrice').value,
            mrp: document.getElementById('mrp').value,
            discounts: document.getElementById('discounts').value,
            stockQuantity: document.getElementById('stockQuantity').value,
            sku: document.getElementById('sku').value,
            shippingWeight: document.getElementById('shippingWeight').value,
            shippingDimensions: document.getElementById('shippingDimensions').value,
            deliveryOptions: document.getElementById('deliveryOptions').value
        };
        console.log('Submitted Values:', values);
    }
});
