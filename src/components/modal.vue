<template >
    <div class="modal-mask" @click="closeModal">
      <div class="modal-wrapper">
        <div class="modal-container">
  
          <div class="modal-header">
            <slot name="header">
              <div class="modal-default-button" @click="closeModal">
                X
              </div>
            </slot>
          </div>
  
          <div class="modal-body">
            
    <div class="old-tv">
        <div class="antenna"></div>
        <main>
            <div class="error-noise">
                <div class="error-effect">
                    <div class="old-tv-content">
                        <FlipCountdown/>

                    </div>
                </div>
            </div>
        </main>
        <div class="speaker"></div>
        <div class="volume">
            <input type="range" min="0" max="100" value="0" />
        </div>
        <nav class="channel">
            <input type="range" min="0" max="100" value="0" />
        </nav>
        <nav class="power">
            <button></button>
        </nav>
        <nav></nav>
        <footer></footer>
    </div>

 
            <slot name="body">
               
            </slot>
          </div>
  
          <div class="modal-footer">
            <slot name="footer">
            </slot>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>

import FlipCountdown from './FlipCountdown.vue';
  export default {
    components:{  FlipCountdown },
    props: ['show'],
    methods: {
      closeModal() {
        this.$emit('close-modal');
      }
    }
  };
  </script>
  