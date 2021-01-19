<script>
export default {
	methods: {
		shortenName(name) {
			if (this.shortenNames) {
				let n = name.split(' ');
				if (n.length > 1)
					return `${n[1]} ${n[0].charAt(0)}.`;
			}
			return name;
		}
	}
}
</script>