<template>
  <div id="header">
    <div class="main_header">
      <div class="container">
        <div class="row">
          <div class="col-md-6">
            <div class="icon_heade_vina">
              <a href="#">
                <img src="../assets/images/package_roaming/logo_freedoo.png">
              </a>
            </div>
          </div>
          <div class="col-md-6">
            <div class="row mr-2">
              <div class="col-md-5 align-self-center">
                <img src="../assets/images/package_roaming/hotline.png">
              </div>
              <div class="col-md-7">
                <img src="../assets/images/package_roaming/vnpt.png">
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="header_line"></div>
    <div class="main_menu">
      <div class="container">
        <div class="row">
          <div id="menu" class="col-md-10 col-10">
            <ul class="topnav">
              <li>
                <a class="parent" href="#">
                  Sản phẩm
                  <span class="glyphicon glyphicon-chevron-down"></span>
                </a>
                <div class="sub_menu">
                  <div class="container">
                    <div class="row">
                      <div class="col-2" style="padding-left: 30px; padding-right: 0">
                        <a href="#">
                          <div class="icon_menu">
                            <img src="../assets/images/package_roaming/icon_sim.png">
                          </div>
                          <div>
                            <div class="txt_strong">Sim số</div>
                          </div>
                        </a>
                      </div>
                      <div class="col-2">
                        <a href="#">
                          <div class="icon_menu">
                            <img src="../assets/images/package_roaming/icon_package.png">
                          </div>
                          <div>
                            <!--                                                <div class="title">Dịch vụ</div>-->
                            <div class="txt_strong">Gói cước</div>
                          </div>

                          <div id="line_menu_2"></div>
                        </a>
                      </div>
                      <div class="col-2">
                        <a href="#">
                          <div class="icon_menu">
                            <img src="../assets/images/package_roaming/icon_topup.png">
                          </div>
                          <div>
                            <!--                                                <div class="title">Dịch vụ</div>-->
                            <div class="txt_strong">Nạp thẻ</div>
                          </div>

                        </a>
                      </div>

                      <div class="col-3">
                        <a href="#">
                          <div class="icon_menu">
                            <img src="../assets/images/package_roaming/icon_roaming.png">
                          </div>
                          <div>
                            <div class="txt_strong">Gói cước Roaming</div>
                          </div>

                        </a>
                      </div>

                      <div class="col-3">
                        <a href="#">
                          <div class="icon_menu">
                            <img src="../assets/images/package_roaming/icon_sim.png">
                          </div>
                          <div>
                            <div class="txt_strong">Chuyển đổi TB trả sau</div>
                          </div>
                        </a>
                      </div>

                      <div class="space_1"></div>

                    </div>
                  </div>
                </div>
              </li>
              <li>
                <a class="parent" href="#"
                   target="_blank">
                  Cộng đồng
                </a>
              </li>
              <li class="">
                <a class="parent" href="#">
                  Cộng tác viên
                </a>
              </li>
              <li>
                <a class="parent" href="#">
                  Hỗ trợ
                </a>
              </li>
              <li>
                <a class="parent" href="#">
                  Tin tức
                </a>
              </li>
              <li>
                <a href="#" title="Tra cứu và hoàn thiện thông tin thuê bao Nghị định 49" class="parent">
                  Tra cứu và hoàn thiện TTTB NĐ49
                </a>
              </li>
            </ul>
          </div>
          <!--<div class="col-md-2 col-3 no_pad">
      <div class="nav navbar-nav">
          <div class="input-group stylish-input-group">
              <input type="text" class="form-control">
              <span class="input-group-addon">
              <button type="submit">
                  <span class="glyphicon glyphicon-search"></span>
              </button>
          </span>
          </div>
      </div>
  </div>-->
          <div class="col-md-2 col-2">
            <div class="fr">
              <!--                    <div class="info">-->
              <!--                        <img src="--><!--/images/icon-2-mail.png">-->
              <!--                    </div>-->
              <!--                    <div class="info email">-->
              <!--                        <a href="#">freedoo@vnpt.vn</a>-->
              <!--                    </div>-->
              <div class="info icon-user menu_user">
                <a href="#">
                  <img src="../assets/images/package_roaming/icon_user.png"></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Navbar',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>
