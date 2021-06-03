<?php

Kirby::plugin('author/cdn', [
	'components' => [
		'url' => function ($kirby, $path, $options) {
			if (Str::startsWith($path, 'assets')) {
				$path = Cachebuster::path($path);

				if (option('cdn', false) !== false) {
					return option('cdn.domain') . '/' . $path;
				}
			}

			$original = $kirby->nativeComponent('url');
			return $original($kirby, $path, $options);
		},
	]
]);