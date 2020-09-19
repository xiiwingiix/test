var nav_ele = '';

nav_ele += ('<div class="layout">');
nav_ele += ('	<div class="grid">');

// <!-- logo -->
nav_ele += ('		<div class="logo display_flex">');
nav_ele += ('			<svg width="104" height="36" viewBox="0 0 104 36">');
nav_ele += ('				<g fill="#ffffff" fill-rule="evenodd">');
nav_ele += ('					<path d="M14.094 31.24c4.912 0 8.71-3.784 8.71-9.384V.06h5.316v35.318h-5.266v-3.28c-2.38 2.472-5.67 3.885-9.368 3.885-7.597 0-13.42-5.5-13.42-13.821V.065h5.316v21.79c0 5.702 3.747 9.386 8.71 9.386"></path>');
nav_ele += ('					<path fill-rule="nonzero" d="M32.071.06h5.115v12.866a12.794 12.794 0 0 1 9.165-3.835c7.597 0 13.572 6.004 13.572 13.471 0 7.417-5.975 13.42-13.572 13.42a12.91 12.91 0 0 1-9.22-3.834v3.228h-5.067L32.07.06zm13.927 31.433c4.861 0 8.862-3.987 8.862-8.93 0-4.996-4-8.931-8.862-8.931a8.888 8.888 0 0 0-8.914 8.93c0 4.944 3.95 8.931 8.914 8.931zM75.218 9.142c7.444 0 12.914 5.7 12.914 13.37v1.665H67.118c.71 4.188 4.203 7.316 8.556 7.316 2.99 0 5.52-1.212 7.445-3.785l3.697 2.725c-2.583 3.431-6.432 5.5-11.142 5.5-7.748 0-13.723-5.753-13.723-13.421 0-7.265 5.722-13.37 13.268-13.37M67.217 20.14h15.75c-.861-3.936-4.052-6.56-7.85-6.56-3.797 0-6.988 2.624-7.9 6.56"></path>');
nav_ele += ('					<path d="M101.855 14.187c-3.342 0-5.773 2.573-5.773 6.559v14.632h-5.115V9.646h5.067v3.182c1.266-2.07 3.342-3.381 6.178-3.381h1.772v4.743l-2.129-.003z"></path>');
nav_ele += ('				</g>');
nav_ele += ('			</svg>');
nav_ele += ('		</div>');
// <!-- //logo -->

// <!-- category -->
nav_ele += ('		<ul class="category display_flex">');
nav_ele += ('			<li><a href="/html/brand-story.html">Brand story</a></li>');
nav_ele += ('			<li><a href="/html/guide.html">System elements</a></li>');
nav_ele += ('			<li><a href="/html/faq.html">Help / FAQ</a></li>');
nav_ele += ('		</ul>');
// <!-- //category -->

nav_ele += ('	</div>');
nav_ele += ('	<div class="bg"></div>');
nav_ele += ('</div>');

document.write(nav_ele);

$(document).ready(function(){
	// 카테고리 색상 변경
	$('.category a.on').removeClass('em');
	$('.category a').each(function(){
		var url = $(location).attr('href');
		var href = $(this).attr('href');

		if (url.indexOf(href) > 0){
			$(this).addClass('em');
		}
	});

	// 로고 변경
	var theme = $('body').attr('theme') || 'light';
	if (theme !== 'dark') {
		$('.logo g').attr('fill','#000000');
	}

	return false;
});
