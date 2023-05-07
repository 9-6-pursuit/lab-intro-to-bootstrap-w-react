import React from 'react'

function Posts() {
  return (
    <>
    <div>Posts</div>
      <div class="container p-5 my-5 border">
        <div class="card-columns card-deck"> 
            <div class="card border">
                <img class="card-img-top" src="" alt="Card location" />
                <div class="card-body">
                    <h4 class="card-title">Sunny Southern California</h4>
                    <p class="card-text">
                      Disneyland <br />
                      The place with the happiest horsees on earth.<br />
                    </p>

                </div>
                <div class="card-footer">
                <a href="#!" class="btn btn-outline-light btn-link" id="goSomewhere">Go somewhere</a> <br />
                  </div>
            </div>


        </div>
      </div>
    </>
  )
}

export default Posts