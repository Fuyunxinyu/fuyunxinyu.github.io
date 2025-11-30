
<template>
  <div class="curzr" ref="curzr" hidden></div>
</template>

<script>
  export default {
    name: 'CircleAndDot',
    data() {
      return {
        position: {
          distanceX: 0, 
          distanceY: 0,
          distance: 0,
          pointerX: 0,
          pointerY: 0,
        },
        previousPointerX: 0,
        previousPointerY: 0,
        angle: 0,
        previousAngle: 0,
        angleDisplace: 0,
        degrees: 57.296,
        fading: false,
        cursorSize: 0,
      }
    },
    computed: {
      cursorStyle() {
        return this.$refs.curzr.style
      }
    },
    mounted() {
      if(!/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        this.cursorSize = Number(getComputedStyle(this.$refs.curzr).getPropertyValue('--size').slice(0, -2))
        this.$refs.curzr.removeAttribute("hidden")
        document.body.addEventListener('mousemove', (event) => {
          this.move(event, document.body)
        })
        document.body.addEventListener('click', () => {
          this.click()
        })
        
      } else {
        this.$destroy()
        this.$el.parentNode.removeChild(this.$el)
      }
    },
    methods: {
      move(event, root) {
        this.previousPointerX = this.position.pointerX
        this.previousPointerY = this.position.pointerY
        this.position.pointerX = event.pageX + root.getBoundingClientRect().x
        this.position.pointerY = event.pageY + root.getBoundingClientRect().y
        this.position.distanceX = this.previousPointerX - this.position.pointerX
        this.position.distanceY = this.previousPointerY - this.position.pointerY
        this.distance = Math.sqrt(this.position.distanceY ** 2 + this.position.distanceX ** 2)

        if (event.target.localName === 'button' || 
            event.target.localName === 'a' || 
            event.target.onclick !== null ||
            event.target.className.includes('curzr-hover')) {
          this.hover()
        } else {
          this.hoverout()
        }

        this.cursorStyle.transform = `translate3d(${this.position.pointerX}px, ${this.position.pointerY}px, 0)`

        this.rotate(this.position)
        this.fade(this.distance)
      },
      rotate(position) {
        let unsortedAngle = Math.atan(Math.abs(position.distanceY) / Math.abs(position.distanceX)) * this.degrees
        this.previousAngle = this.angle

        if (position.distanceX <= 0 && position.distanceY >= 0) {
          this.angle = 90 - unsortedAngle + 0
        } else if (position.distanceX < 0 && position.distanceY < 0) {
          this.angle = unsortedAngle + 90
        } else if (position.distanceX >= 0 && position.distanceY <= 0) {
          this.angle = 90 - unsortedAngle + 180
        } else if (position.distanceX > 0 && position.distanceY > 0) {
          this.angle = unsortedAngle + 270
        }

        if (isNaN(this.angle)) {
          this.angle = this.previousAngle
        } else {
          if (this.angle - this.previousAngle <= -270) {
            this.angleDisplace += 360 + this.angle - this.previousAngle
          } else if (this.angle - this.previousAngle >= 270) {
            this.angleDisplace += this.angle - this.previousAngle - 360
          } else {
            this.angleDisplace += this.angle - this.previousAngle
          }
        }
        this.cursorStyle.transform += ` rotate(${this.angleDisplace}deg)`
      },
      hover() {
        this.cursorStyle.border = `${this.cursorSize / 2}px solid #111920`
      },
      hoverout() {
        this.cursorStyle.border = ''
      },
      fade(distance) {
        this.cursorStyle.boxShadow = `0 ${-15 - distance * 2}px 0 -8px #111920, 0 0 0 1px #F2F5F8`
        if (!this.fading) {
          this.fading = true
          setTimeout(() => {
            this.cursorStyle.boxShadow = `0 -15px 0 -8px #11192000, 0 0 0 1px #F2F5F8`
            this.fading = false
          }, 50)
        }
      },
      click() {
        this.cursorStyle.transform += ` scale(0.75)`
        setTimeout(() => {
          this.cursorStyle.transform = this.cursorStyle.transform.replace(` scale(0.75)`, '')
        }, 35)
      }
    }
  }
</script>

<style scoped>
.curzr {
  --size:  20px;
  --delay: 100ms;
  --body-color: #64B7FF;

  box-sizing: border-box;
  position: fixed;
  top: calc(var(--size) / -2);
  left: calc(var(--size) / -2);
  z-index: 2147483647;
  width: var(--size);
  height: var(--size);
  background-color: #fff0;
  border: 1.25px solid var(--body-color);
  border-radius: 50%;
  box-shadow: 0 -15px 0 -8px #0000, 0 0 0 1px #F2F5F8;
  transition: 250ms, transform var(--delay);
  user-select: none;
  pointer-events: none;
}
</style>