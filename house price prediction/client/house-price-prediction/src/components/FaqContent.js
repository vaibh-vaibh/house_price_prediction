import React from 'react';

const FaqContent = () => {
  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">Frequently Asked Questions</h2>
      <div class="accordion" id="accordionPanelsStayOpenExample">
  <div class="accordion-item">
    <h2 class="accordion-header" id="panelsStayOpen-headingOne">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
      How is price change calculated?
      </button>
    </h2>
    <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
      <div class="accordion-body">
        The price change is calculated quarterly. The price revision exercised is brought to effect by several market forces like changes in construction and labour cost and ready reckoner rate/circle rate, to name a few. Government intervention through policy changes may also lead to price change.
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="panelsStayOpen-headingTwo">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
      Is the area mentioned carpet, Built up Area (BUA), Super Built up Area (SBUA)?
      </button>
    </h2>
    <div id="panelsStayOpen-collapseTwo" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwo">
      <div class="accordion-body">
         Our House Price Prediction is also depend on this query. So, you first check completely our website. Then, you give your answer own very well.
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="panelsStayOpen-headingThree">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
      What are the most appreciated localities/societies?
      </button>
    </h2>
    <div id="panelsStayOpen-collapseThree" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree">
      <div class="accordion-body">
      The most appreciated localities/societies represent the areas/projects which have witnessed maximum price appreciation Year on Year (YoY).
      </div>
    </div>
  </div>

  <div class="accordion-item">
    <h2 class="accordion-header" id="panelsStayOpen-headingFour">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseFour" aria-expanded="false" aria-controls="panelsStayOpen-collapseFour">
      How to decide your budget for buying a house?
      </button>
    </h2>
    <div id="panelsStayOpen-collapseFour" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingFour">
      <div class="accordion-body">
      Budget is one of the first points to be considered while planning to buy a home. Our platform will give you as a Service page to resolve this Query perfectly. 
      </div>
    </div>
  </div>

  <div class="accordion-item">
    <h2 class="accordion-header" id="panelsStayOpen-headingFive">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseFive" aria-expanded="false" aria-controls="panelsStayOpen-collapseFive">
      How to negotiate a deal?
      </button>
    </h2>
    <div id="panelsStayOpen-collapseFive" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingFive">
      <div class="accordion-body">
      The key is to remember that you can always seek a discount as a homebuyer. However, it is crucial to understand when to end the negotiations and decide further. Be an informed homebuyer by knowing about the market trends in the locality and the project. Do basic research on the internet and involve a good broker. As an expert, the broker insights and negotiation tips might be of immense help.
      </div>
    </div>
  </div>
</div>
    </div>
  );
};

export default FaqContent;
