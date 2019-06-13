let SessionLoad = 1
if &cp | set nocp | endif
let s:so_save = &so | let s:siso_save = &siso | set so=0 siso=0
let v:this_session=expand("<sfile>:p")
silent only
silent tabonly
cd ~/src/mern/mern-auth
if expand('%') == '' && !&modified && line('$') <= 1 && getline(1) == ''
  let s:wipebuf = bufnr('%')
endif
set shortmess=aoO
argglobal
%argdel
$argadd package.json
set stal=2
tabnew
tabrewind
edit routes/api/users.js
set splitbelow splitright
set nosplitbelow
set nosplitright
wincmd t
set winminheight=0
set winheight=1
set winminwidth=0
set winwidth=1
argglobal
setlocal fdm=manual
setlocal fde=0
setlocal fmr={{{,}}}
setlocal fdi=#
setlocal fdl=0
setlocal fml=1
setlocal fdn=20
setlocal fen
silent! normal! zE
let s:l = 52 - ((51 * winheight(0) + 27) / 54)
if s:l < 1 | let s:l = 1 | endif
exe s:l
normal! zt
52
normal! 016|
lcd ~/src/mern/mern-auth
tabnext
edit ~/src/mern/mern-auth/client/src/components/private-route/PrivateRoute.js
set splitbelow splitright
set nosplitbelow
set nosplitright
wincmd t
set winminheight=0
set winheight=1
set winminwidth=0
set winwidth=1
argglobal
setlocal fdm=manual
setlocal fde=0
setlocal fmr={{{,}}}
setlocal fdi=#
setlocal fdl=0
setlocal fml=1
setlocal fdn=20
setlocal fen
silent! normal! zE
let s:l = 23 - ((22 * winheight(0) + 26) / 53)
if s:l < 1 | let s:l = 1 | endif
exe s:l
normal! zt
23
normal! 020|
lcd ~/src/mern/mern-auth
tabnext 2
set stal=1
badd +1 ~/src/mern/mern-auth/routes/api/users.js
badd +28 ~/src/mern/mern-auth/package.json
badd +7 ~/src/mern/mern-auth/client/src/reducers/index.js
badd +21 ~/src/mern/mern-auth/client/src/components/auth/Login.js
badd +13 ~/src/mern/mern-auth/client/src/utils/setAuthToken.js
badd +22 ~/src/mern/mern-auth/config/passport.js
badd +1 ~/src/mern/mern-auth/models/User.js
badd +16 ~/src/mern/mern-auth/server.js
badd +4 ~/src/mern/mern-auth/config/keys.js
badd +1 ~/src/mern/mern-auth/user.js
badd +46 ~/src/mern/mern-auth/client/src/actions/authActions.js
badd +14 ~/src/mern/mern-auth/client/src/store.js
badd +23 ~/src/mern/mern-auth/private-route/PrivateRoute.js
badd +0 ~/src/mern/mern-auth/client/src/components/private-route/PrivateRoute.js
if exists('s:wipebuf') && len(win_findbuf(s:wipebuf)) == 0
  silent exe 'bwipe ' . s:wipebuf
endif
unlet! s:wipebuf
set winheight=1 winwidth=20 shortmess=filnxtToO
set winminheight=1 winminwidth=1
let s:sx = expand("<sfile>:p:r")."x.vim"
if file_readable(s:sx)
  exe "source " . fnameescape(s:sx)
endif
let &so = s:so_save | let &siso = s:siso_save
doautoall SessionLoadPost
unlet SessionLoad
" vim: set ft=vim :
