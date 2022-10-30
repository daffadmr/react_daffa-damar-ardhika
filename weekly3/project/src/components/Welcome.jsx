import React from 'react'
import brandImage from '../asset/img/brand.png'

const Welcome = () => {
  return (
    <div className="welcome">
        <div className="container">
          <div className="welcome-title">
            <h1>Welcome</h1>
            <hr />
          </div>
          <div className="row align-items-center">
            <div className="col-12 col-md-6 text-md-start">
              <img src={brandImage} alt="" className="mx-auto" />
            </div>
            <div className="welcome-text col-12 col-md-6">
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit vitae corporis, amet
                repudiandae
                perspiciatis accusamus! Perferendis harum dolor aperiam amet voluptas architecto aliquid
                minus,
                molestiae voluptatem voluptate nemo! Enim ipsam architecto repudiandae, voluptatum nisi modi
                sunt
                asperiores vero fugiat? Expedita quod modi, sed doloremque repellat amet veniam voluptatem,
                a
                voluptatibus fuga exercitationem eveniet laudantium iure dolore quas recusandae similique
                sapiente
                sequi
                pariatur vitae velit, perspiciatis voluptas at minus. Ab tenetur totam blanditiis quas
                accusamus
                inventore fugiat? Voluptas cumque ullam minus sed pariatur quasi, in quidem voluptates
                itaque
                nisi
                laborum fugit omnis nemo, rem a tempore qui unde aspernatur porro eos?</p>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Welcome