
class CookieConsent extends HTMLElement {
    connectedCallback() {
        // console.log(localStorage.getItem("cookieConsent"))
        if(localStorage.getItem("consentAccepted") == null) {
            this.innerHTML = `
            <div id="cookieModalRow" class="row">
                <div id="cookie-consent-modal" class="col col-xs-10 offset-xs-1 d-flex justify-content-center mt-5">
                    <div id="card" class="card p-3 cookie"><span>We use third party cookies to personalize content, ads and analyze site traffic.<br></span><a href="#">Learn more<i class="fa fa-angle-right ml-2"></i></a>
                    <div class="mt-4 text-right"><span id="declineCookies" class="mr-3 decline">Decline</span><button id="allowCookies" class="btn btn-light btn-sm" type="button">Allow cookies</button></div>
                    </div>
                </div>
            </div>
                `
        } else {
            this.innerHTML = "";
        }
    }
}

class NoScriptGoogleTag extends HTMLElement {
    connectedCallback() {
        if(localStorage.getItem("consentAccepted") == "true") {
            //console.log('Loading <noscript> tag')
            this.innerHTML = `
            <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-KD8D52M"
            height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
           `
        }
    }
}

customElements.define("cookie-consent", CookieConsent);

customElements.define("no-script-google-tag", NoScriptGoogleTag);

var declineCookies = document.getElementById("declineCookies");
var allowCookies = document.getElementById("allowCookies");

if(declineCookies != null) {
    declineCookies.addEventListener("click", function(){
            console.log("cookies declined");
            document.getElementById("cookieModalRow").remove();
            localStorage.setItem("consentAccepted", false)
    })
}

if(allowCookies != null) {
    allowCookies.addEventListener("click", function(){
            console.log("cookies allowed");
            document.getElementById("cookieModalRow").remove();
            localStorage.setItem("consentAccepted", true)
    })
}

