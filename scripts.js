document.addEventListener('DOMContentLoaded', () => {

  const addItemBtn = document.getElementById('addItemBtn');
  const wizard = document.getElementById('wizard');
  const closeWizard = document.getElementById('closeWizard');
  const saveContiue = document.getElementById('saveContiue');
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');
  const progressBarFill = document.getElementById('progressBarFill');
  let currentStep = 0;

  // Show the wizard
  addItemBtn.addEventListener('click', () => {
    wizard.classList.add('show');
    loadStep(currentStep);
    saveContiue.style.display = 'flex'
  });

  // Close the wizard
  closeWizard.addEventListener('click', () => {
    wizard.classList.remove('show');
    wizard.classList.add('closeAnimation');
    saveContiue.style.display = 'none'
  });

  // Load step content
  function loadStep(step) {
    const stepsContent = [
      // Step 1: Basic Information
      `<div class="product-form"> 

    

    <h4>Basic Information</h4>

    <label for="product-name">Product Name</label>
    <input type="text" id="product-name " class="form-control" placeholder="Product Name">

    <label for="product-description">Product Description</label>
    <textarea id="product-description" placeholder="Product Description"></textarea>
    <div class="d-flex align-items-center">
  <select id="product-category" class="py-2" style="background: #E5E4E4; border: 2px solid #E5E4E4; padding: 0 10px; width: 140px;">
    <option value="product-1">Category</option>
   
    <option value="product-1">Product - 1</option>
    <option value="product-2">Product - 2</option>
    <option value="product-3">Product - 3</option>
    <option value="product-4">Product - 4</option>
  </select>
  <input style="color:"#fff !important"; type="text" class="flex-1" name="" placeholder="Search by category" value="Search by category...">
</div>

    


    
    <select id="product-brand">
      <option value="">Brand</option>
      <option value="product-1">Brand- 1</option>
      <option value="product-2">Brand- 2</option>
      <option value="product-3">Brand- 3</option>
      <option value="product-4">Brand- 4</option>
      </select>

   
  </>`,

      // Step 2: Product Specifications
      `<div style="color: #4E4E4E;" class="d-flex flex-column gap-3">
                <h4> Product Specifications</h4>
                <div>
                    <label>Model Number/Name</label>
                    <input class="form-control" type="text" id="model" placeholder="Model Number/Name">
                </div>
                <div>
    <select class="form-control" id="color">
        <option value="">Color</option>
        <option value="red">Red</option>
        <option value="blue">Blue</option>
        <option value="green">Green</option>
        </select>
</div> 


<div>
    <select class="form-control" id="size">
        <option value="">Size/Dimensions</option>
        <option value="small">Small</option>
        <option value="medium">Medium</option>
        <option value="large">Large</option>
        </select>
</div>

<div> 

    <select class="form-control" id="weight">
        <option value="">Weight</option>
        <option value="light">Light</option>
        <option value="medium">Medium</option>
        <option value="heavy">Heavy</option>
        </select>
</div>

<div> 

    <select class="form-control" id="material">
        <option value="">Material</option>
        <option value="cotton">Cotton</option>
        <option value="wool">Wool</option>
        <option value="silk">Silk</option>
        </select>
</div>
            </div>`,

      // Step 3: Pricing and Inventory
      ` <div class="pricing-inventory">
        <h4>Pricing and Inventory</h4>
        <div class="row g-3">
  <div class="col-md-4">
    <div class="form-group">
      <label for="mrp" class="form-label">MRP</label>
      <input type="text" class="form-control" id="mrp" value="$250">
    </div>
  </div>
  <div class="col-md-4">
    <div class="form-group">
      <label for="sellingPrice" class="form-label">Selling Price</label>
      <input type="text" class="form-control" id="sellingPrice" value="$200">
    </div>
  </div>
  <div class="col-md-4">
    <div class="form-group">
      <label for="discounts" class="form-label">Discounts</label>
      <input type="text" class="form-control" id="discounts" value="$50">
    </div>
  </div>
</div>


  <div class="d-flex flex-column">
  <div>
    <div class="d-flex flex-column gap-0">
      <label for="stockQuantity">Stock Quantity</label>
      <input style="width: 50px; text-align: center;" type="text" id="stockQuantity" value="6">
    </div>
  </div>

  <div class="mt-3">
    <div class="d-flex flex-column gap-0">
      <label for="sku">SKU</label>
      <input style="width: 140px !important;text-align: center;" type="text" value="H8R7029P">
    </div>
  </div>
</div>

</div>



    </div>`
    ];

    document.getElementById('wizardContent').innerHTML = stepsContent[step];
    updateProgressBar(step);
  }


  // Update progress bar
  function updateProgressBar(step) {
    const percentage = ((step + 1) / 3) * 100; // 4 steps total
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
    if (currentStep < 2) { // 4 steps total
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
