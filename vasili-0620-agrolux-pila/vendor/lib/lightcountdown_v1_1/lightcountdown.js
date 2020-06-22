/**
 * LightCountdown javascript plugin
 * @version 1.1
 * @author xkritikx@gmail.com
 */
class LightCountdown {
    constructor(selector, dateEnd, options = {}) {
        if (selector instanceof Node) {
            this.containers = [selector]
        } else if (selector instanceof NodeList) {
            this.containers = selector
        } else if (typeof selector == "string") {
            this.containers = document.querySelectorAll(selector)
        } else {
            throw new Error("LightCountdown: Invalid Selector in first argument!")
        }

        if (dateEnd instanceof Date) {
            this.dateEnd = dateEnd
        } else if (Date.parse(dateEnd)) {
            this.dateEnd = new Date(dateEnd)
        } else {
            throw new Error("LightCountdown: Invalid Date in second argument!")
        }


        let defaultOptions = {
            seconds: true,
            minutes: true,
            hours: true,
            days: true,
            delimeter: ':',
            finish: null,
            interval: 1000,
            animation: false,
            animationDuration: '800ms',
            language: {
                seconds: "Секунд",
                minutes: "Минут",
                hours: "Часов",
                days: "Дней"
            }
        }
        this.options = Object.assign({}, defaultOptions, options);

        if (this.containers.length < 1) {
            return false
        }
        this.timer = 0;

        Array.prototype.forEach.call(this.containers, (e, i) => this.createContainer(e))
        this.play()
    }

    play() {
        this.timer = setInterval(() => this.tick(), this.options.interval)
    }

    stop() {
        clearInterval(this.timer)
        if (typeof this.options.finish == "function") {
            this.options.finish(this.containers)
        }
    }

    tick() {
        let range = this.getRange()
        if (range.v < 0) {
            range = {
                s: '00',
                m: '00',
                h: '00',
                d: '00',
                v: 0
            }
            this.stop()
        }
        //console.log(value)
        Array.prototype.forEach.call(this.containers, (container) => {

            if (this.options.days) {
                Array.prototype.forEach.call(container.querySelectorAll('.lightcountdown__days .lightcountdown__digit'), (e, i) => {
                    if (e.textContent != range.d.toString()[i]) {
                        e.textContent = range.d.toString()[i]
                        if (this.options.animation) {
                            e.classList.add(...this.options.animation.split(' '))
                        }
                    }
                })
            }

            if (this.options.hours) {
                Array.prototype.forEach.call(container.querySelectorAll('.lightcountdown__hours .lightcountdown__digit'), (e, i) => {
                    if (e.textContent != range.h.toString()[i]) {
                        e.textContent = range.h.toString()[i]
                        if (this.options.animation) {
                            e.classList.add(...this.options.animation.split(' '))
                        }
                    }
                })
            }

            if (this.options.minutes) {
                Array.prototype.forEach.call(container.querySelectorAll('.lightcountdown__minutes .lightcountdown__digit'), (e, i) => {
                    if (e.textContent != range.m.toString()[i]) {
                        e.textContent = range.m.toString()[i]
                        if (this.options.animation) {
                            e.classList.add(...this.options.animation.split(' '))
                        }
                    }
                })
            }

            if (this.options.seconds) {
                Array.prototype.forEach.call(container.querySelectorAll('.lightcountdown__seconds .lightcountdown__digit'), (e, i) => {
                    if (e.textContent != range.s.toString()[i]) {
                        e.textContent = range.s.toString()[i]
                        if (this.options.animation) {
                            e.classList.add(...this.options.animation.split(' '))
                        }
                    }
                })
            }
        })
    }

    getRange() {
        let now = new Date()
        let value = this.dateEnd - now
        let s = Math.floor(value / 1000 % 60)
        let m = Math.floor(value / 1000 / 60 % 60)
        let h = Math.floor(value / 1000 / 60 / 60 % 24)
        let d = Math.floor(value / 1000 / 60 / 60 / 24 % 365)

        if (s < 10) {
            s = "0".concat(s)
        }
        if (m < 10) {
            m = "0".concat(m)
        }
        if (h < 10) {
            h = "0".concat(h)
        }
        if (d < 10) {
            d = "0".concat(d)
        }

        return {
            s: s,
            m: m,
            h: h,
            d: d,
            v: value
        }
    }

    createContainer(container) {
        let range = this.getRange()
        let template = []
        let delimeter = `<div class="lightcountdown__delimeter">${this.options.delimeter}</div>`

        container.classList.add('lightcountdown')

        if (this.options.days) {
            template.push(`<div class="lightcountdown__item lightcountdown__days">
    <div class="lightcountdown__digits">
        <div class="lightcountdown__digit">${range.d.toString()[0]}</div>
        <div class="lightcountdown__digit">${range.d.toString()[1]}</div>
    </div>
    <div class="lightcountdown__text">${this.options.language.days}</div>
</div>`)
        }

        if (this.options.hours) {
            template.push(`<div class="lightcountdown__item lightcountdown__hours">
    <div class="lightcountdown__digits">
        <div class="lightcountdown__digit">${range.h.toString()[0]}</div>
        <div class="lightcountdown__digit">${range.h.toString()[1]}</div>
    </div>
    <div class="lightcountdown__text">${this.options.language.hours}</div>
</div>`)
        }

        if (this.options.minutes) {
            template.push(`<div class="lightcountdown__item lightcountdown__minutes">
    <div class="lightcountdown__digits">
        <div class="lightcountdown__digit">${range.m.toString()[0]}</div>
        <div class="lightcountdown__digit">${range.m.toString()[1]}</div>
    </div>
    <div class="lightcountdown__text">${this.options.language.minutes}</div>
</div>`)
        }

        if (this.options.seconds) {
            template.push(`<div class="lightcountdown__item lightcountdown__seconds">
    <div class="lightcountdown__digits">
        <div class="lightcountdown__digit">${range.s.toString()[0]}</div>
        <div class="lightcountdown__digit">${range.s.toString()[1]}</div>
    </div>
    <div class="lightcountdown__text">${this.options.language.seconds}</div>
</div>`)
        }

        container.innerHTML = template.join(delimeter)
        if (this.options.animation) {
            Array.prototype.forEach.call(container.querySelectorAll('.lightcountdown__digit'), (e, i) => {
                e.style.animationDuration = this.options.animationDuration;
                e.addEventListener('animationend', () => {
                    e.classList.remove(...this.options.animation.split(' '))
                })
            })
        }
    }
}
