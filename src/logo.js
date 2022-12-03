export const logo = `
<div class="logo">
  <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-trees" width="44" height="44"
    viewBox="0 0 24 24" stroke-width="1.5" stroke="#f8fafc" fill="none" stroke-linecap="round" stroke-linejoin="round">
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M16 5l3 3l-2 1l4 4l-3 1l4 4h-9" />
    <line x1="15" y1="21" x2="15" y2="18" />
    <path d="M8 13l-2 -2" />
    <path d="M8 12l2 -2" />
    <path d="M8 21v-13" />
    <path
      d="M5.824 15.995a3 3 0 0 1 -2.743 -3.69a2.998 2.998 0 0 1 .304 -4.833a3 3 0 0 1 4.615 -3.707a3 3 0 0 1 4.614 3.707a2.997 2.997 0 0 1 .305 4.833a3 3 0 0 1 -2.919 3.695h-4z" />
  </svg>
  <div>
    <p>GREEN</p>
    <p>_PAGE</p>
  </div>
</div>`;

export const socialIcons = `
<ul class="social-icons">
        <li>
            <a href="#"
            ><svg
                xmlns="http://www.w3.org/2000/svg"
                class="icon icon-tabler icon-tabler-brand-facebook"
                width="30"
                height="30"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="#f8fafc"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
            >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path
                d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3"
                /></svg
            ></a>
        </li>
        <li>
            <a href="#"
            ><svg
                xmlns="http://www.w3.org/2000/svg"
                class="icon icon-tabler icon-tabler-battery-eco"
                width="44"
                height="44"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="#f8fafc"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
            >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path
                d="M4 9a2 2 0 0 1 2 -2h11a2 2 0 0 1 2 2v.5a0.5 .5 0 0 0 .5 .5a0.5 .5 0 0 1 .5 .5v3a0.5 .5 0 0 1 -.5 .5a0.5 .5 0 0 0 -.5 .5v.5a2 2 0 0 1 -2 2h-5.5"
                />
                <path
                d="M3 16.143c0 -2.84 2.09 -5.143 4.667 -5.143h2.333v.857c0 2.84 -2.09 5.143 -4.667 5.143h-2.333v-.857z"
                />
                <path d="M3 20v-3" /></svg
            ></a>
        </li>
        <li>
            <a href="#"
            ><svg
                xmlns="http://www.w3.org/2000/svg"
                class="icon icon-tabler icon-tabler-brand-twitter"
                width="30"
                height="30"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="#f8fafc"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
            >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path
                d="M22 4.01c-1 .49 -1.98 .689 -3 .99c-1.121 -1.265 -2.783 -1.335 -4.38 -.737s-2.643 2.06 -2.62 3.737v1c-3.245 .083 -6.135 -1.395 -8 -4c0 0 -4.182 7.433 4 11c-1.872 1.247 -3.739 2.088 -6 2c3.308 1.803 6.913 2.423 10.034 1.517c3.58 -1.04 6.522 -3.723 7.651 -7.742a13.84 13.84 0 0 0 .497 -3.753c-.002 -.249 1.51 -2.772 1.818 -4.013z"
                /></svg
            ></a>
        </li>
    </ul>`;

export const contact = `
    <div class="contact">
        <p>Get in touch</p>
        <aside>
            <form>
                <div class="close">
                    <svg class="svg-icon" fill="#f8fafc" viewBox="0 0 20 20">
                        <path  d="M15.898,4.045c-0.271-0.272-0.713-0.272-0.986,0l-4.71,4.711L5.493,4.045c-0.272-0.272-0.714-0.272-0.986,0s-0.272,0.714,0,0.986l4.709,4.711l-4.71,4.711c-0.272,0.271-0.272,0.713,0,0.986c0.136,0.136,0.314,0.203,0.492,0.203c0.179,0,0.357-0.067,0.493-0.203l4.711-4.711l4.71,4.711c0.137,0.136,0.314,0.203,0.494,0.203c0.178,0,0.355-0.067,0.492-0.203c0.273-0.273,0.273-0.715,0-0.986l-4.711-4.711l4.711-4.711C16.172,4.759,16.172,4.317,15.898,4.045z"></path>
                    </svg>
                </div>               
                <div>
                    <label for="name">Name</label>
                    <input type="text" id="name" required />
                </div>
                <div>
                    <label for="email">Email</label>
                    <input type="email" id="email" required/>
                </div>
                <div>
                    <label for="message">Message</label>
                    <textarea id="message" ></textarea>
                </div>
                <div class="check-box-container">
                    <label for="checkbox">agree to the terms</label>
                    <input type="checkbox" name="" id="checkbox" required/>
                </div>
                <button class="submit">Submit</button>
            </form>
        </aside>
    </div>`;
