<!-- Template Name: Scientific studios -->
<?php get_header(); ?>

	<main >

		<?php if (have_posts()): while (have_posts()) : the_post(); ?>

		<section class="all_news">
			<div class="wrap">
				<h1 class="section_header"><?php the_title(); ?></h1>
					
					<div class="flex_conteiner--sp_b">
						<?php
							global $post;
							$args = array('category' => 6);
							$myposts = get_posts( $args );
							foreach( $myposts as $post ){ setup_postdata($post);
								?>
									<div class="all_news--item">
										<a href="<?php the_permalink(); ?>" class="news_head--link"><?php the_title(); ?></a>
										<div class="all_news--image" style="background-image: url(<?php echo get_the_post_thumbnail_url()?>)"></div>
										<p><?php html5wp_excerpt('html5wp_index'); ?></p>
									</div>
								<?php
							}
							wp_reset_postdata();
						?>
					</div>
				</div>
			</section>

		<?php endwhile; ?>

		<?php else: ?>
			<h2><?php _e( 'Sorry, nothing to display.', 'html5blank' ); ?></h2>
		<?php endif; ?>

	</main>

<?php get_footer(); ?>